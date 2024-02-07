body {
    background-color: black;
    color: lime;
    font-family: "Courier New", Courier, monospace;
    text-align: center;
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

h1 {
    font-size: 10rem;
    margin-bottom: 50px;
    animation: glitch 1s infinite;
}

.links {
    margin-top: 50px;
}

a {
    margin: 0 10px;
}

@keyframes glitch {
    2%, 64% {
        transform: translate(2px, 0) skew(0deg);
    }
    4%, 60% {
        transform: translate(-2px, 0) skew(0deg);
    }
    62% {
        transform: translate(0, 0) skew(5deg);
    }
}
  
