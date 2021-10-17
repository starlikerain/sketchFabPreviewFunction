let scene, camera, renderer

const init = () => {
    // Scene
    scene = new THREE.Scene()
    scene.background = new THREE.Color('green')

    // Render
    renderer = new THREE.WebGLRenderer({antialias: true, logarithmicDepthBuffer: true})
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    // Camera
    const aspect = window.innerWidth / window.innerHeight
    camera = new THREE.PerspectiveCamera(60, aspect, 0.01, 5000)
    camera.rotation.y = (90/180) * Math.PI
    camera.position.set(5300, 2600,0)
    // camera.position.set(0, 0,0)

    // Camera Controller
    const controls = new THREE.OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', renderer)

    // Light
    let ambientLight = new THREE.AmbientLight("grey",20)
    scene.add(ambientLight)



    // Loader
    let loader = new THREE.GLTFLoader()
    // loader.load("scene2.gltf", (result) => {
    //     scene.add(result.scene)
    //     renderer.render(scene, camera)
    //     animate()
    // })
    loader.load("./gothic_building_for_aria_pack_1.0_3D_modal/scene.gltf", (result) => {
        scene.add(result.scene)
        renderer.render(scene, camera)
        animate()
    })
    // loader.load("./castle_of_loarre_3D_modal/scene.gltf", (result) => {
    //     scene.add(result.scene)
    //     renderer.render(scene, camera)
    //     animate()
    // })
}

// Recursive Loop for Render Scene
const animate = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}


init()
