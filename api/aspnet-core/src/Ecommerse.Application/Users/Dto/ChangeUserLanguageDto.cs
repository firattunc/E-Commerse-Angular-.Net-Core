using System.ComponentModel.DataAnnotations;

namespace Ecommerse.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}