using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FBMatch.Models
{
    public class Match
    {
        public int MatchId { get; set; }
        public DateTime DateTime { get; set; }
        public string League { get; set; }
        public string TeamOne { get; set; }
        public string TeamTwo { get; set; }
    }
}
