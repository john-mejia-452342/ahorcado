<template>
    <div>
        <div class="contenedor ">
            <h1>Elige la dificultad en la que deseas jugar</h1>

            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">E A S Y
                <div id="clip">
                    <div id="leftTop" class="corner"></div>
                    <div id="rightBottom" class="corner"></div>
                    <div id="rightTop" class="corner"></div>
                    <div id="leftBottom" class="corner"></div>
                </div>
                <span id="rightArrow" class="arrow"></span>
                <span id="leftArrow" class="arrow"></span>
            </button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">M E D I U M
                <div id="clip">
                    <div id="leftTop" class="corner"></div>
                    <div id="rightBottom" class="corner"></div>
                    <div id="rightTop" class="corner"></div>
                    <div id="leftBottom" class="corner"></div>
                </div>
                <span id="rightArrow" class="arrow"></span>
                <span id="leftArrow" class="arrow"></span>
            </button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">H A
                R D
                <div id="clip">
                    <div id="leftTop" class="corner"></div>
                    <div id="rightBottom" class="corner"></div>
                    <div id="rightTop" class="corner"></div>
                    <div id="leftBottom" class="corner"></div>
                </div>
                <span id="rightArrow" class="arrow"></span>
                <span id="leftArrow" class="arrow"></span>
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Elige que tema te gustaria </h1>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <button class="dos" id="easy">
                                        <span>
                                            Animales
                                        </span>
                                    </button>
                                </div>
                                <div class="mb-3">
                                    <button class="dos" id="medio">
                                        <span>
                                            Marcas de ropa
                                        </span>
                                    </button>
                                </div>
                                <div class="mb-3">
                                    <button class="dos" id="hard">
                                        <span>
                                            ciudades
                                        </span>
                                    </button>
                                </div>
                                <div class="mb-3">
                                    <button class="dos">
                                        <span>
                                            Departamentos
                                        </span>
                                    </button>
                                </div>
                                <div class="mb-3">
                                    <button class="dos">
                                        <span>
                                            Frutas
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" id="dos" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
.contenedor {
    border: solid rgb(255, 255, 255) 2px;
    height: 52vh;
    width: 100%;
    background-color: rgba(136, 134, 134, 0.637);
    display: flex;
    flex-direction: column;
    align-items: center;
}

#exampleModalLabel {
    color: #000;
    text-align: center;
    justify-content: center;
}
#dos{
    color: #000;
}

.dos {
    padding: 0.1em 0.25em;
    width: 13em;
    height: 4.2em;
    background-color: #212121;
    border: 0.08em solid #fff;
    border-radius: 0.3em;
    font-size: 12px;
}

.dos span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0.4em;
    width: 8.25em;
    height: 2.5em;
    background-color: #212121;
    border-radius: 0.2em;
    font-size: 1.5em;
    color: #fff;
    border: 0.08em solid #fff;
    box-shadow: 0 0.4em 0.1em 0.019em #fff;
}

.dos span:hover {
    transition: all 0.5s;
    transform: translate(0, 0.4em);
    box-shadow: 0 0 0 0 #fff;
}

.dos span:not(hover) {
    transition: all 1s;
}


.contenedor button {
    margin: 10px;
}

h1 {
    margin: 50px;
}

button {
    position: relative;
    width: 11em;
    height: 4em;
    outline: none;
    transition: 0.1s;
    background-color: transparent;
    border: none;
    font-size: 13px;
    font-weight: bold;
    color: #ddebf0;
}

#clip {
    --color: #2761c3;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: 5px double var(--color);
    box-shadow: inset 0px 0px 15px #195480;
    -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}

.arrow {
    position: absolute;
    transition: 0.2s;
    background-color: #2761c3;
    top: 35%;
    width: 11%;
    height: 30%;
}

#leftArrow {
    left: -13.5%;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
}

#rightArrow {
    -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
    left: 102%;
}

button:hover #rightArrow {
    background-color: #27c39f;
    left: -15%;
    animation: 0.6s ease-in-out both infinite alternate rightArrow8;
}

button:hover #leftArrow {
    background-color: #27c39f;
    left: 103%;
    animation: 0.6s ease-in-out both infinite alternate leftArrow8;
}

.corner {
    position: absolute;
    width: 4em;
    height: 4em;
    background-color: #2761c3;
    box-shadow: inset 1px 1px 8px #2781c3;
    transform: scale(1) rotate(45deg);
    transition: 0.2s;
}

#rightTop {
    top: -1.98em;
    left: 91%;
}

#leftTop {
    top: -1.96em;
    left: -3.0em;
}

#leftBottom {
    top: 2.10em;
    left: -2.15em;
}

#rightBottom {
    top: 45%;
    left: 88%;
}

button:hover #leftTop {
    animation: 0.1s ease-in-out 0.05s both changeColor8,
        0.2s linear 0.4s both lightEffect8;
}

button:hover #rightTop {
    animation: 0.1s ease-in-out 0.15s both changeColor8,
        0.2s linear 0.4s both lightEffect8;
}

button:hover #rightBottom {
    animation: 0.1s ease-in-out 0.25s both changeColor8,
        0.2s linear 0.4s both lightEffect8;
}

button:hover #leftBottom {
    animation: 0.1s ease-in-out 0.35s both changeColor8,
        0.2s linear 0.4s both lightEffect8;
}

button:hover .corner {
    transform: scale(1.25) rotate(45deg);
}

button:hover #clip {
    animation: 0.2s ease-in-out 0.55s both greenLight8;
    --color: #27c39f;
}

@keyframes changeColor8 {
    from {
        background-color: #2781c3;
    }

    to {
        background-color: #27c39f;
    }
}

@keyframes lightEffect8 {
    from {
        box-shadow: 1px 1px 5px #27c39f;
    }

    to {
        box-shadow: 0 0 2px #27c39f;
    }
}

@keyframes greenLight8 {
    from {}

    to {
        box-shadow: inset 0px 0px 32px #27c39f;
    }
}

@keyframes leftArrow8 {
    from {
        transform: translate(0px);
    }

    to {
        transform: translateX(10px);
    }
}

@keyframes rightArrow8 {
    from {
        transform: translate(0px);
    }

    to {
        transform: translateX(-10px);
    }
}
</style>