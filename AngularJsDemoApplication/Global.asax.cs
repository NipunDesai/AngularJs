using System.Data.Entity;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using AngularJsDemoApplication.App_Start;
using AngularJsDemoApplication.Migrations;
using AngularJsDemoApplication.Models;

namespace AngularJsDemoApplication
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            AutofacConfig.RegisterDependencies();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<DemoDataContext, Configuration>());
            using (DemoDataContext context = new DemoDataContext())
            {
                context.Database.Initialize(false);
            }
        }
    }
}
