window.onload = () => {  
    let param = new URLSearchParams(window.location.search);//receiving parameters or value which in the search

    let title = param.get("query");//get the value
    console.log(title);

    if (title !== null) {
        searchMovie(title);
    }
    else{
        console.log("Movie not found");
    }
}

const searchMovie = (title) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${title}&page=1`); //receiving title 

    xhr.send();


    xhr.onreadystatechange = () => {

        if(xhr.readyState === 4) {//check 4 stages
            if(xhr.status === 200) {//check status
                const movies = JSON.parse(xhr.responseText);//convert string into object
                // console.log(movies);
                movies.results.forEach(movie => {  // for each loop for single single object
                    console.log(movie);
                    console.log(movie.title);
                    console.log(movie.vote_average);
                    console.log(movie.poster_path);

                    //create element
                    let divtag=document.createElement("div");
                    divtag.className = "col-xl-3";
                    let imgtag=document.createElement("img");
                    imgtag.className = "img-fluid";  // for images in horizontal lines
                    let h4tag=document.createElement("h4");
                    let ptag=document.createElement("p");

                    imgtag.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;//concatenate with the image domain name
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
        
    };
};


