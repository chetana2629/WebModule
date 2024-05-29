window.onload= () => {
    // console.log("hgdf"); for checking js file is connected or not

    // 1 step create instance 
    let xhr = new XMLHttpRequest();

    // step 2 open window
    xhr.open('GET',"https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1");

    // step 3 send request
    xhr.send();

    // step 4 
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


const handleSearch = (event) => {
    event.preventDefault();
    // console.log("jksjk");

    let title = document.querySelector('.searchBox').value;
    console.log(title);  // print whatever we type in search box

    window.location.href = `search.html?query=${title}`; //create current page url

};
