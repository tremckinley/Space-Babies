//housing the names for the game

class KidName {
    constructor(name, gender, popularity_ranking, country_of_origin, meaning, famous_person) {
      this.name = name;
      this.gender = gender;
      this.popularity_ranking = popularity_ranking;
      this.country_of_origin = country_of_origin;
      this.meaning = meaning;
      this.famous_person = famous_person;
    }
  
    giveLength = () => {
      return this.name.length;
    }
  
  }
  
  const kidNames = [
   new KidName("Alice", "girl", "Top 10", "England", "Noble", "Alice in Wonderland, a beloved character"),
    new KidName("Bob", "boy", "Top 50", "England", "Gift of God", "Bob Marley, a famous reggae musician"),
    new KidName("Charlie", "boy", "Top 20", "Germany", "Free Man", "Charlie Chaplin, a silent film legend"),
    new KidName("Diana", "girl", "Top 100", "Latin", "Divine, Heavenly", "Princess Diana, a beloved British royal"),
    new KidName("Ethan", "boy", "Top 25", "Hebrew", "Strong, Enduring", "Ethan Hawke, an Academy Award-nominated actor"),
    new KidName("Fiona", "girl", "Top 75", "Scotland", "Fair, White", "Fiona Apple, a Grammy-winning singer-songwriter"),
    new KidName("George", "boy", "Top 30", "Greek", "Farmer, Earthworker", "George Clooney, an Academy Award-winning actor"),
    new KidName("Hannah", "girl", "Top 20", "Hebrew", "Grace, Favor", "Hannah Montana, a famous fictional character"),
    new KidName("Isaac", "boy", "Top 40", "Hebrew", "Laughter", "Isaac Newton, a renowned physicist"),
    new KidName("Julia", "girl", "Top 60", "Latin", "Youthful, Downy", "Julia Roberts, an Academy Award-winning actress"),
    new KidName("Kevin", "boy", "Top 80", "Irish", "Kind, Gentle", "Kevin Hart, a famous comedian and actor"),
    new KidName("Luna", "girl", "Top 15", "Latin", "Moon", "Luna Lovegood, a beloved character from Harry Potter"),
    new KidName("Michael", "boy", "Top 10", "Hebrew", "Who is like God?", "Michael Jordan, a legendary basketball player"),
    new KidName("Nina", "girl", "Top 90", "Spanish", "Little Girl", "Nina Simone, a famous singer and musician"),
    new KidName("Oscar", "boy", "Top 35", "Irish", "Spear of God", "Oscar Wilde, a famous playwright and poet"),
    new KidName("Penelope", "girl", "Top 25", "Greek", "Weaver", "Penelope Cruz, an Academy Award-winning actress"),
    new KidName("Quinn", "unisex", "Top 50", "Irish", "Wisdom, Chief", "Quinn Fabray, a character from the TV show Glee"),
    new KidName("Ryan", "boy", "Top 15", "Irish", "Little King", "Ryan Reynolds, a famous actor"),
    new KidName("Sophia", "girl", "Top 5", "Greek", "Wisdom", "Sophia Loren, a famous actress"),
    new KidName("Thomas", "boy", "Top 50", "Aramaic", "Twin", "Thomas Edison, a famous inventor"),
    new KidName("Ursula", "girl", "Top 200", "Latin", "Little Bear", "Ursula K. Le Guin, a famous author"),
    new KidName("Victor", "boy", "Top 75", "Latin", "Conqueror", "Victor Hugo, a famous author"),
    new KidName("Wendy", "girl", "Top 150", "English", "Friend", "Wendy Darling, a character from Peter Pan"),
    new KidName("Xander", "boy", "Top 100", "Greek", "Defender of the People", "Xander Cage, a character from the movie xXx"),
    new KidName("Yara", "girl", "Top 300", "Arabic", "Small Butterfly", "Yara Shahidi, a famous actress"),
    new KidName("Zachary", "boy", "Top 45", "Hebrew", "The Lord Remembers", "Zachary Levi, a famous actor"),
    new KidName("Ava", "girl", "Top 3", "Latin", "Life", "Ava Gardner, a famous actress"),
    new KidName("Liam", "boy", "Top 1", "Irish", "Strong-Willed Warrior", "Liam Neeson, a famous actor"),
    new KidName("Mia", "girl", "Top 10", "Latin", "Mine", "Mia Farrow, a famous actress"),
    new KidName("Noah", "boy", "Top 2", "Hebrew", "Rest, Comfort", "Noah Centineo, a famous actor"),
    new KidName("Olivia", "girl", "Top 1", "Latin", "Olive Tree", "Olivia Wilde, a famous actress"),
    new KidName("James", "boy", "Top 5", "Hebrew", "Supplanter", "James Cameron, a famous director"),
    new KidName("Emily", "girl", "Top 12", "Latin", "Rival", "Emily Dickinson, a famous poet"),
    new KidName("Aiden", "boy", "Top 20", "Irish", "Little Fire", "Aiden Turner, a famous actor"),
    new KidName("Chloe", "girl", "Top 25", "Greek", "Blooming", "Chloe Grace Moretz, a famous actress"),
    new KidName("Benjamin", "boy", "Top 6", "Hebrew", "Son of the Right Hand", "Benjamin Franklin, a famous inventor and statesman"),
    new KidName("Grace", "girl", "Top 15", "Latin", "Grace", "Grace Kelly, a famous actress and princess"),
    new KidName("Henry", "boy", "Top 30", "German", "Ruler of the Household", "Henry Cavill, a famous actor"),
    new KidName("Isabella", "girl", "Top 5", "Hebrew", "Devoted to God", "Isabella Rossellini, a famous actress"),
    new KidName("Jacob", "boy", "Top 10", "Hebrew", "Supplanter", "Jacob Tremblay, a famous actor"),
  ];

export { KidName, kidNames }
