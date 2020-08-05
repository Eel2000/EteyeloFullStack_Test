using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EteyeloFullStack_Test.Models
{
    public class Institus
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }

        [BsonElement]
        public string InstituName { get; set; }

        [BsonElement]
        public string InstituPhone { get; set; }

        [BsonElement]
        public Etudiant[] etudiants { get; set; }


        public Institus()
        {
            etudiants = new List<Etudiant>().ToArray();
        }
    }
}
