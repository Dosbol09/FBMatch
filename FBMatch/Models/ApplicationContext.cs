using Microsoft.EntityFrameworkCore;


namespace FBMatch.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        { }

        public DbSet<Match> Matches { get; set; }
    }
}
