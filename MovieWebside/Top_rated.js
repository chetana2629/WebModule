window.onload = () => {
    // console.log("ghsj");

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1");

    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const movies = JSON.parse(xhr.responseText);
                movies.results.forEach((movie) => {
                    console.log(movie);
                    console.log(movie.title);
                    console.log(movie.voter_average);
                    console.log(movie.poster_path);

                    let divtag = document.createElement("div");
                    divtag.className = "col-xl-3";
                    let imgtag = document.createElement("img");
                    imgtag.className = "img-fluid";
                    let h4tag = document.createElement("h4");
                    let ptag = document.createElement("p");

                    imgtag.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                    h4tag.innerText = movie.title;
                    ptag.innerText = `Rating: ${movie.vote_average}`;

                    divtag.append(imgtag);
                    divtag.append(h4tag);
                    divtag.append(ptag);

                    document.querySelector('.row').append(divtag);

                });
            }
            else{
                 console.log("Error: " + xhr.status);
                }
            }
        }
    }