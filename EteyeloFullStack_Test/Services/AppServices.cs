using EteyeloFullStack_Test.DbSetting;
using EteyeloFullStack_Test.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EteyeloFullStack_Test.Services
{
    public class AppServices
    {
        private readonly IMongoCollection<Institus> _institu;

        private readonly IMongoCollection<Etudiant> _etudiant;

        public AppServices(IDatabaseSettings database)
        {
            var client = new MongoClient(database.ConnectionString);
            var Db = client.GetDatabase(database.DatabaseName);

            _institu = Db.GetCollection<Institus>(database.Institu);
            _etudiant = Db.GetCollection<Etudiant>(database.Etudiant);
        }

        public List<Institus> GetInstitus()
        {
            List<Institus> institus;
            institus = _institu.Find(inst => true).ToList();

            return institus;
        }

        public Institus GetById(string Id)
        {
            return _institu.Find<Institus>(inst => inst.id == Id).FirstOrDefault();
        }

        public string NewInstitu(Institus institus)
        {
            _institu.InsertOne(institus);


            return "Added!";
        }


        public string DeleteInstitu(string id)
        {

            _institu.DeleteOne<Institus>(inst => inst.id == id);

            return "Deleted";
        }

        public string UpdateInstitu(string id, Institus institus)
        {
            try
            {
                //_institu.ReplaceOne(i => i.id == id,institus);


                var filter = Builders<Institus>
                    .Filter.Eq("id", id);

                var updateInstitu = Builders<Institus>.Update.
                    Set("InstituName", institus.InstituName)
                    .Set("InstituPhone", institus.InstituPhone);

                var result = _institu.UpdateOne(filter, updateInstitu);

                if (result.IsAcknowledged)
                {
                    Console.WriteLine("Update sucess!");
                    return "Update success!!";
                }
                else
                {
                    Console.WriteLine("erro occur while updating...");
                }


                //return "Update success!!";
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message.ToString());
                return ex.Message;
            }
            return null;
        }

        public string NewInstituStudent(string id, Etudiant etudiant)
        {
            try
            {
                var filter = Builders<Institus>.Filter.And(
                    Builders<Institus>.Filter.Where(x => x.id == id));

                var update = Builders<Institus>.Update.Push("etudiants", etudiant);

                _institu.FindOneAndUpdate(filter, update);
                _etudiant.InsertOne(etudiant);

                var stud = _etudiant.Find(e => e.id == etudiant.id).Single();

                var update1 = Builders<Institus>.Update.Push("etudiants", stud);

                return "Successfully";
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message.ToString());
                return "failed";
            }
        }

        public Institus DetailsStudent(string id, string E)
        {
            var query = from i in _institu.AsQueryable()
                        where i.id == id
                        select new Institus()
                        {
                            id = i.id,
                            etudiants = (Etudiant[])i.etudiants.Where(x => x.FirstName == E)
                        };

            var result = query.Single();


            return result;
        }

        public void UpdateStuden(string id, string E, Etudiant etudiant)
        {
            try
            {
                //_institu.FindOneAndUpdate(
                //    i => i.id == id && i.etudiants.Any(e => e.FirstName == E),Builders<Institus>.Update
                //    .Set(e => e.etudiants.FirstOrDefault().FirstName,E));

                var filter = Builders<Institus>.Filter;
                var institu = filter.Eq(i => i.id, id) & filter.ElemMatch(e => e.etudiants, et => et.FirstName == E);
                var updateBuilder = Builders<Institus>.Update;

                var update = updateBuilder
                    .Set(e => e.etudiants[-1].FirstName, etudiant.FirstName)
                    .Set(e => e.etudiants[-1].LastName, etudiant.LastName)
                    .Set(e => e.etudiants[-1].promo, etudiant.promo);

                _institu.UpdateOne(institu, update);


            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message.ToString());
            }
        }

         public async Task deletStudentAsync(string id,string E)
        {
            try
            {
                var filter = Builders<Institus>.Filter.Where(i => i.id == id);

                var update = Builders<Institus>.Update.PullFilter(y => y.etudiants, builder => builder.FirstName == E);
                var result = await _institu.UpdateOneAsync(filter, update);
               Console.WriteLine(result.IsAcknowledged && result.ModifiedCount > 0);
            }
            catch (Exception)
            {
                Console.WriteLine("An erro occur while deleting");
                throw;
            }
        }
    }
}
