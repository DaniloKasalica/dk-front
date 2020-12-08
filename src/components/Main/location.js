import React, { useState, useEffect } from "react";
import axios from 'axios'





export const Location = function App(props) {
    const[town, changeTown] = useState(null)
      
    useEffect(()=>{
        if(town && town!== props.town)
        props.setLocation(town)
        else if(town==false && props.town)
        props.setLocation(props.town)

    },[town])
 //dodati google api reverse geocode za dobijanje grada
 //slacu zahtjev serveru na onmount (useEffect) sa long i lat za lokaciju 
    return (
      /*
        <Autocomplete
          onChange={(event, value) => changeTown(value ? value.town : town)}
          id="filter-demo"
          options={top100Films}
          getOptionLabel={(option) => option.town}
          filterOptions={filterOptions}
          style={{ width: 150 }}
          
          renderInput={(params) => <TextField {...params} label={props.town ? props.town : 'Lokacija' } variant="outlined" />}
        />
        */
       <h1>sdad</h1>
      );
    
    }
    // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
    const top100Films = [
      { town: 'Nikšić', year: 1994 },
      { town: 'Podgorica', year: 1972 },
      { town: 'Pljevlja: Part II', year: 1974 },
      { town: 'Žabljak', year: 2008 },
      { town: '12 Angry Men', year: 1957 },
      { town: "Schindler's List", year: 1993 },
      { town: 'Pulp Fiction', year: 1994 },
      { town: 'The Lord of the Rings: The Return of the King', year: 2003 },
      { town: 'The Good, the Bad and the Ugly', year: 1966 },
      { town: 'Fight Club', year: 1999 },
      { town: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
      { town: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
      { town: 'Forrest Gump', year: 1994 },
      { town: 'Inception', year: 2010 },
      { town: 'The Lord of the Rings: The Two Towers', year: 2002 },
      { town: "One Flew Over the Cuckoo's Nest", year: 1975 },
      { town: 'Goodfellas', year: 1990 },
      { town: 'The Matrix', year: 1999 },
      { town: 'Seven Samurai', year: 1954 },
      { town: 'Star Wars: Episode IV - A New Hope', year: 1977 },
      { town: 'City of God', year: 2002 },
      { town: 'Se7en', year: 1995 },
      { town: 'The Silence of the Lambs', year: 1991 },
      { town: "It's a Wonderful Life", year: 1946 },
      { town: 'Life Is Beautiful', year: 1997 },
      { town: 'The Usual Suspects', year: 1995 },
      { town: 'Léon: The Professional', year: 1994 },
      { town: 'Spirited Away', year: 2001 },
      { town: 'Saving Private Ryan', year: 1998 },
      { town: 'Once Upon a Time in the West', year: 1968 },
      { town: 'American History X', year: 1998 },
      { town: 'Interstellar', year: 2014 },
      { town: 'Casablanca', year: 1942 },
      { town: 'City Lights', year: 1931 },
      { town: 'Psycho', year: 1960 },
      { town: 'The Green Mile', year: 1999 },
      { town: 'The Intouchables', year: 2011 },
      { town: 'Modern Times', year: 1936 },
      { town: 'Raiders of the Lost Ark', year: 1981 },
      { town: 'Rear Window', year: 1954 },
      { town: 'The Pianist', year: 2002 },
      { town: 'The Departed', year: 2006 },
      { town: 'Terminator 2: Judgment Day', year: 1991 },
      { town: 'Back to the Future', year: 1985 },
      { town: 'Whiplash', year: 2014 },
      { town: 'Gladiator', year: 2000 },
      { town: 'Memento', year: 2000 },
      { town: 'The Prestige', year: 2006 },
      { town: 'The Lion King', year: 1994 },
      { town: 'Apocalypse Now', year: 1979 },
      { town: 'Alien', year: 1979 },
      { town: 'Sunset Boulevard', year: 1950 },
      { town: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
      { town: 'The Great Dictator', year: 1940 },
      { town: 'Cinema Paradiso', year: 1988 },
      { town: 'The Lives of Others', year: 2006 },
      { town: 'Grave of the Fireflies', year: 1988 },
      { town: 'Paths of Glory', year: 1957 },
      { town: 'Django Unchained', year: 2012 },
      { town: 'The Shining', year: 1980 },
      { town: 'WALL·E', year: 2008 },
      { town: 'American Beauty', year: 1999 },
      { town: 'The Dark Knight Rises', year: 2012 },
      { town: 'Princess Mononoke', year: 1997 },
      { town: 'Aliens', year: 1986 },
      { town: 'Oldboy', year: 2003 },
      { town: 'Once Upon a Time in America', year: 1984 },
      { town: 'Witness for the Prosecution', year: 1957 },
      { town: 'Das Boot', year: 1981 },
      { town: 'Citizen Kane', year: 1941 },
      { town: 'North by Northwest', year: 1959 },
      { town: 'Vertigo', year: 1958 },
      { town: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
      { town: 'Reservoir Dogs', year: 1992 },
      { town: 'Braveheart', year: 1995 },
      { town: 'M', year: 1931 },
      { town: 'Requiem for a Dream', year: 2000 },
      { town: 'Amélie', year: 2001 },
      { town: 'A Clockwork Orange', year: 1971 },
      { town: 'Like Stars on Earth', year: 2007 },
      { town: 'Taxi Driver', year: 1976 },
      { town: 'Lawrence of Arabia', year: 1962 },
      { town: 'Double Indemnity', year: 1944 },
      { town: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
      { town: 'Amadeus', year: 1984 },
      { town: 'To Kill a Mockingbird', year: 1962 },
      { town: 'Toy Story 3', year: 2010 },
      { town: 'Logan', year: 2017 },
      { town: 'Full Metal Jacket', year: 1987 },
      { town: 'Dangal', year: 2016 },
      { town: 'The Sting', year: 1973 },
      { town: '2001: A Space Odyssey', year: 1968 },
      { town: "Singin' in the Rain", year: 1952 },
      { town: 'Toy Story', year: 1995 },
      { town: 'Bicycle Thieves', year: 1948 },
      { town: 'The Kid', year: 1921 },
      { town: 'Inglourious Basterds', year: 2009 },
      { town: 'Snatch', year: 2000 },
      { town: '3 Idiots', year: 2009 },
      { town: 'Monty Python and the Holy Grail', year: 1975 },
    ];
  