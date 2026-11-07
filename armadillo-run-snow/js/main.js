const {
    Engine,
    Render,
    Runner,
    Bodies,
    Composite
} = Matter;

// Motor de física
const engine = Engine.create();

// Canvas
const canvas = document.getElementById("gameCanvas");

// Renderizado
const render = Render.create({
    canvas: canvas,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "#bde7ff"
    }
});

// Suelo
const ground = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight - 30,
    window.innerWidth,
    60,
    {
        isStatic: true,
        render: {
            fillStyle: "#FFFFFF"
        }
    }
);
const goal = Bodies.rectangle(
    window.innerWidth - 120,
    window.innerHeight - 120,
    80,
    80,
    {
        isStatic:true,
        isSensor:true,
        render:{
            fillStyle:"#00ff66"
        }
    }
);

// Bola
const ball = Bodies.circle(
    300,
    100,
    25,
    {
        restitution: 0.4,
        render: {
            fillStyle: "#ff8800"
        }
    }
);

// Añadir objetos
Composite.add(engine.world, [
    ground,
    ball,
    goal
]);

// Iniciar motor
Render.run(render);

const runner = Runner.create();

Runner.run(runner, engine);
