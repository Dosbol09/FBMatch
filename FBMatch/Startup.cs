using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FBMatch.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace FBMatch
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            string connectionString = "Server=(localdb)\\mssqllocaldb;Database=dbmatch;Trusted_Connection=True;";
            services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(connectionString));

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}
