using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace EteyeloFullStack_Test.Models
{
    public enum promotion
    {
        premiere,
        deuxiemen,
        troisieme,
        quatrieme,
        cintquieme,
        sixieme
    }

    public class Etudiant
    {
        [BsonId]
        public ObjectId id { get; set; }

        [BsonElement]
        public string FirstName { get; set; }

        [BsonElement]
        public string LastName { get; set; }


        [BsonElement]
        public promotion? promo { get; set; }

    }
}