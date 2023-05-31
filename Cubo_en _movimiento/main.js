document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('canvas');
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 10000);
    camera.position.z = 500;

    var artwork = new THREE.Mesh(
        new THREE.BoxGeometry(100, 100, 100),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    scene.add(artwork);

    function animate() {
        requestAnimationFrame(animate);
        artwork.rotation.x += 0.01;
        artwork.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
    console.log("Hola")
});
