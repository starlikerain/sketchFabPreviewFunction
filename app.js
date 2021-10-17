let scene, camera, renderer

const init = () => {
    // Scene
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    // Render
    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    // Camera
    const aspect = window.innerWidth / window.innerHeight
    camera = new THREE.PerspectiveCamera(60, aspect, 0.01, 5000)
    camera.rotation.y = (90/180) * Math.PI
    camera.position.set(0.5, 0,0)

    // Camera Controller
    const controls = new THREE.OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', renderer)

    // Light
    let ambientLight = new THREE.AmbientLight(0xaaaaaa,20)
    scene.add(ambientLight)

    // Loader
    let loader = new THREE.GLTFLoader()
    loader.load("scene.gltf", (result) => {
        scene.add(result.scene)
        renderer.render(scene, camera)
        animate()
    })
}

// Recursive Loop for Render Scene
const animate = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}


init()
