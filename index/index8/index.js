/* 
* 创建threejs场景
**/
const canvasBox = document.getElementById("canvas-1");
const canvasLine = document.getElementById("canvas-2");
const canvasFont = document.getElementById("canvas-3");

// 场景
const scene1 = new THREE.Scene(); 
// PerspectiveCamera透视摄像机（视野角度，长宽比，近截面，远截面）
const camera1 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// 摄像机位移，防止与物体处于同一坐标（0, 0, 0）
camera1.position.z = 5;
// 渲染器
const renderer1 = new THREE.WebGLRenderer(); 
// 设置渲染器的尺寸
renderer1.setSize( window.innerWidth / 2, window.innerHeight / 2);
// 渲染的模型添加到dom
canvasBox.appendChild( renderer1.domElement );
// 立方体
const geometry1 = new THREE.BoxGeometry( 1, 1, 1 );
// MeshBasicMaterial材质
const material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// 网格
const cube1 = new THREE.Mesh( geometry1, material1 );
// 添加物体
scene1.add( cube1 );
// 动画循环
const animate1 = () => {
  // setInterval 与 requestAnimationFrame优缺点，当用户切换到其它的标签页时后者会暂停运行，节省处理器资源
  // setInterval( animate, 300);
	requestAnimationFrame( animate1 );
  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;
	renderer1.render( scene1, camera1 );
}
// 浏览器WebGL兼容性检查
const newWEBGL1 = new WEBGL();
if (newWEBGL1.isWebGLAvailable()) {
  animate1();
} else {
  const warning = newWEBGL1.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}


// 场景
const scene2 = new THREE.Scene(); 
// PerspectiveCamera透视摄像机（视野角度，长宽比，近截面，远截面）
const camera2 = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera2.position.set( 0, 0, 100 );
camera2.lookAt( 0, 0, 0 );
// 渲染器
const renderer2 = new THREE.WebGLRenderer();
renderer2.setSize( window.innerWidth / 2, window.innerHeight / 2);
// 渲染的模型添加到dom
canvasLine.appendChild( renderer2.domElement );
// LineBasicMaterial材质
const material2 = new THREE.LineBasicMaterial( { color: 0x0000ff } );
// 点
const geometry2 = new THREE.BufferGeometry();
// 
const vertices2 = new Float32Array( [
	-10, 0, 0,
	0, 10, 0,
	10, 0, 0,
] );
geometry2.setAttribute( 'position', new THREE.BufferAttribute( vertices2, 3 ) );
// 
const line2 = new THREE.Line( geometry2, material2 );
scene2.add( line2 );
renderer2.render( scene2, camera2 );


// 场景
const scene3 = new THREE.Scene(); 
// PerspectiveCamera透视摄像机（视野角度，长宽比，近截面，远截面）
const camera3 = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 2000 );
camera3.position.set(0, 0, 100);
// 渲染器
const renderer3 = new THREE.WebGLRenderer({ antialias: true });
renderer3.setClearColor( 0x000000, 1 );
renderer3.setSize( window.innerWidth / 2, window.innerHeight / 2);
// 渲染的模型添加到dom
canvasFont.appendChild( renderer3.domElement );
// 创建点光源照亮场景
const light3 = new THREE.PointLight(0xffe502, 1, 1000);
light3.position.set(50, 50, 50);
scene3.add(light3);
// 创建方向光金属感
const direLight3 = new THREE.DirectionalLight(0xffe502, 1000);
direLight3.position.set(0, 500, 0);
direLight3.castShadow = true;
scene3.add(direLight3);
// 文字
const loader3 = new THREE.FontLoader();
loader3.load( './Axure Handwriting_Bold.json', ( font ) => {
  // 网格
  const geometry3 = new THREE.TextGeometry( 'Hello threeJs', {
    font: font, // 字体
		size: 24, // 字号大小，一般为大写字母的高度
		height: 2, // 文字的厚度
    weight: 'normal', // 是否加粗
    style: 'normal', // 是否斜体
		curveSegments: 6, // 曲线分段数
		bevelEnabled: true, // 是否开启斜角
		bevelThickness: 6, // 倒角厚度
		bevelSize: 6, // 倒角宽度
		bevelSegments: 6, // 斜角分段数
  } );
  geometry3.center();
  // 
  const mat3 = new THREE.MeshPhongMaterial({
    color: 0xffe502,
    specular: 0x009900,
    shininess: 30,
    shading: THREE.FlatShading
  });
  // 
  const mesh3 = new THREE.Mesh(geometry3, mat3);
  mesh3.castShadow = true;
  scene3.add(mesh3);
  // tween补间动画
  const tween3 = new TWEEN.Tween(mesh3.rotation);
  tween3.to({y: Math.PI * 2}, 6000).repeat(Infinity).yoyo(true).start();
}, (xhr) => {
  console.log(xhr, 'xhr');
}, (err) => {
  console.log(err, 'err');
});
// 动画循环
const animate3 = () => {
  TWEEN.update();
  renderer3.render(scene3, camera3);
  requestAnimationFrame( animate3 );
}
// 浏览器WebGL兼容性检查
const newWEBGL3 = new WEBGL();
if (newWEBGL3.isWebGLAvailable()) {
  animate3();
} else {
  const warning = newWEBGL3.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}
