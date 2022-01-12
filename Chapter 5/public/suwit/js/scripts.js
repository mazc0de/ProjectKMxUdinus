// generate pilihan computer
function getRandomComputer() {
    const com = Math.random();
    console.log(`output for computer : ${com}`);
    if (com < 0.34) return "batu";
    if (com >= 0.34 && com < 0.67) return "kertas";
    return "gunting";
}

// rules
function getResult(com, player) {
    if (player == com) return "DRAW!";
    if (player == "batu") return com == "gunting" ? "PLAYER 1 WIN!" : "COMPUTER WIN!";
    if (player == "kertas") return com == "batu" ? "PLAYER 1 WIN!" : "COMPUTER WIN!";
    if (player == "gunting") return com == "kertas" ? "PLAYER 1 WIN!" : "COMPUTER WIN!";
}

// menampilkan result box
function getResultBox(result) {
    // menghilangkan text "VS"
    document.querySelector(".text-vs").style.display = "none";

    // menampilkan hasil pemenang
    if (result == "PLAYER 1 WIN!") {
        document.querySelector(".result-area").classList.add("result-box-player-win");
        document.querySelector(".result-box-player-win").innerHTML = result;
    } else if (result == "COMPUTER WIN!") {
        document.querySelector(".result-area").classList.add("result-box-com-win");
        document.querySelector(".result-box-com-win").innerHTML = result;
    } else {
        document.querySelector(".result-area").classList.add("result-box-draw");
        document.querySelector(".result-box-draw").innerHTML = result;
    }
}

// menampilkan active class pilihan komputer
function showActive(com) {
    if (com == "batu") {
        document.querySelector(".batu-computer").classList.add("box-active");
    } else if (com == "kertas") {
        document.querySelector(".kertas-computer").classList.add("box-active");
    } else if (com == "gunting") {
        document.querySelector(".gunting-computer").classList.add("box-active");
    }
}

//  animasi active box
function animateActiveBox(com, result) {
    let i = 0;
    let end = 16;
    const time = setInterval(() => {
        let myClassList = document.getElementsByClassName("pilihan-computer");

        const a = myClassList[i % 3];
        a.classList.add("box-active");

        setTimeout(() => {
            a.classList.remove("box-active");
            if (i >= end) {
                document.querySelector(".text-ask").style.visibility = "visible";
                showActive(com);
                getResultBox(result);
                clearInterval(time);
            }
        }, 300);

        console.log(i);
        i++;
    }, 400);
}

// function utama
function main() {
    let isGameOver = false;

    // jika player memilih batu
    const pBatu = document.querySelector(".batu-player");
    pBatu.addEventListener("click", function() {
        if (isGameOver) {
            return;
        }

        pBatu.classList.add("box-active");

        const com = getRandomComputer();
        const player = "batu";

        console.log("player : " + player);
        console.log("computer : " + com);

        const result = getResult(com, player);
        console.log("hasil : " + result);

        animateActiveBox(com, result);

        document.querySelector(".kertas-player").style.cursor = "not-allowed";
        document.querySelector(".gunting-player").style.cursor = "not-allowed";

        isGameOver = true;
    });

    // jika player memilih kertas
    const pKertas = document.querySelector(".kertas-player");
    pKertas.addEventListener("click", function() {
        if (isGameOver) {
            return;
        }

        pKertas.classList.add("box-active");

        const com = getRandomComputer();
        const player = "kertas";

        console.log("player : " + player);
        console.log("computer : " + com);

        const result = getResult(com, player);
        console.log("hasil : " + result);

        animateActiveBox(com, result);

        document.querySelector(".batu-player").style.cursor = "not-allowed";
        document.querySelector(".gunting-player").style.cursor = "not-allowed";

        isGameOver = true;
    });

    // jika player memilih gunting
    const pgunting = document.querySelector(".gunting-player");
    pgunting.addEventListener("click", function() {
        if (isGameOver) {
            return;
        }

        pgunting.classList.add("box-active");

        const com = getRandomComputer();
        const player = "gunting";

        console.log("player : " + player);
        console.log("computer : " + com);

        const result = getResult(com, player);
        console.log("hasil : " + result);

        animateActiveBox(com, result);

        document.querySelector(".kertas-player").style.cursor = "not-allowed";
        document.querySelector(".batu-player").style.cursor = "not-allowed";

        isGameOver = true;
    });

    // tombol refresh versi reload halaman
    const refreshBtn = document.querySelector(".btn-refresh");
    refreshBtn.addEventListener("click", function() {
        location.reload();
        return false;
    });
}

main();