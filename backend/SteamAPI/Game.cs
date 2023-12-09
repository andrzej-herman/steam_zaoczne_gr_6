namespace SteamAPI
{
    public class Game
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public required int Age { get; set; }
        public required string GameDesc { get; set; }
        public required string Category { get; set; }
        public required List<string> Photos { get; set; }
        public required string Trailer { get; set; }
        public decimal Price { get; set; }
        public Guid Guid { get; set; }
    }
}
