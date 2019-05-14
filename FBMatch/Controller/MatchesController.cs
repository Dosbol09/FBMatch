using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FBMatch.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FBMatch.Controllers
{
    [Route("api/matches")]
    public class MatchController : Controller
    {
        ApplicationContext db;
        public MatchController(ApplicationContext context)
        {
            db = context;
            if (!db.Matches.Any())
            {
                db.Matches.Add(new Match { DateTime = new DateTime(2008, 5, 1, 8, 30, 0), League="Премьер-Лига", TeamOne="Барселона", TeamTwo="Реал Мадрид" });
                db.Matches.Add(new Match { DateTime = new DateTime(2008, 6, 1, 8, 30, 0), League = "Премьер-Лига", TeamOne = "Аякс", TeamTwo = "Тотенхэм" });
                db.Matches.Add(new Match { DateTime = new DateTime(2008, 7, 1, 8, 30, 0), League = "Премьер-Лига", TeamOne = "Бавария", TeamTwo = "Челси" });
                db.SaveChanges();
            }
        }
        [HttpGet]
        public IEnumerable<Match> Get()
        {
            return db.Matches.ToList();
        }

        [HttpGet("{id}")]
        public Match Get(int id)
        {
            Match match = db.Matches.FirstOrDefault(x => x.MatchId == id);
            return match;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Match match)
        {
            if (ModelState.IsValid)
            {
                db.Matches.Add(match);
                db.SaveChanges();
                return Ok(match);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Match match)
        {
            if (ModelState.IsValid)
            {
                db.Update(match);
                db.SaveChanges();
                return Ok(match);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Match match = db.Matches.FirstOrDefault(x => x.MatchId == id);
            if (match != null)
            {
                db.Matches.Remove(match);
                db.SaveChanges();
            }
            return Ok(match);
        }
    }
}