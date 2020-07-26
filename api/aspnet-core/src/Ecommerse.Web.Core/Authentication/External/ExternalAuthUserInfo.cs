namespace Ecommerse.Authentication.External
{
    public class ExternalAuthUserInfo
    {
        public string RoleName{ get; set; }
        public string ProviderKey { get; set; }

        public string Name { get; set; }

        public string EmailAddress { get; set; }

        public string Surname { get; set; }

        public string Provider { get; set; }
    }
}
