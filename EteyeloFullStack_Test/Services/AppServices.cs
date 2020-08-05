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
    }
}
