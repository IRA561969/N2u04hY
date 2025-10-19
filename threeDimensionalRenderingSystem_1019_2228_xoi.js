// 代码生成时间: 2025-10-19 22:28:31
import Vue from 'vue';
import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight, BoxGeometry, MeshPhongMaterial, Mesh } from 'three';
import NuxtLogo from '../assets/nuxt-icon.svg'; // 将nuxt图标作为纹理

// 3D渲染系统组件
export default Vue.component('three-dimensional-rendering-system', {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      try {
        // 创建场景
        this.scene = new Scene();

        // 创建相机
        this.camera = new PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );

        // 创建渲染器
        this.renderer = new WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.$el.appendChild(this.renderer.domElement);

        // 添加环境光
        const ambientLight = new AmbientLight(0x404040); // 软白色光
        this.scene.add(ambientLight);

        // 添加平行光
        const directionalLight = new DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0); // 设置光源位置
        this.scene.add(directionalLight);

        // 加载NuxtLogo作为纹理
        const loader = new THREE.TextureLoader();
        loader.load(NuxtLogo, (texture) => {
          const geometry = new BoxGeometry();
          const material = new MeshPhongMaterial({ map: texture });
          this.mesh = new Mesh(geometry, material);
          this.scene.add(this.mesh);
          this.animate();
        });

        // 相机位置
        this.camera.position.z = 5;

        // 相机看向原点
        this.camera.lookAt(0, 0, 0);

      } catch (error) {
        console.error('3D Rendering System Initialization Error:', error);
      }
    },
    animate() {
      requestAnimationFrame(this.animate);
      if (this.mesh) {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
      }
      this.renderer.render(this.scene, this.camera);
    },
    handleWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  },
  created() {
    window.addEventListener('resize', this.handleWindowResize);
  },
});
