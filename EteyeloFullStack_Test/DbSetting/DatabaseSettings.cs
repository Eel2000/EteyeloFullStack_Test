﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EteyeloFullStack_Test.DbSetting
{
    public interface IDatabaseSettings
    {
        public string Institu { get; set; }

        public string Etudiant { get; set; }

        public string ConnectionString { get; set; }

        public string DatabaseName { get; set; }
    }

    public class DatabaseSettings : IDatabaseSettings
    {
        public string Institu { get ; set ; }

        public string ConnectionString { get ; set ; }

        public string DatabaseName { get ; set ; }

        public string Etudiant { get ; set ; }
    }
}
