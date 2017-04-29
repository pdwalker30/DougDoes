using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DougDoes.Startup))]
namespace DougDoes
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
