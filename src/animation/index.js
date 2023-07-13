import React, {useEffect, useRef} from "react";
import * as THREE from 'three'; // 导入 THREE.js 库
import {OrbitControls} from './OrbitControls.js'; // 导入 OrbitControls 来控制相机移动
import {FontLoader} from './FontLoader.js'; // 导入 FontLoader 来加载自定义字体

const fontLoader = new FontLoader();  // 创建 FontLoader 对象
const COLOR = 0x000000;  // 设置渲染颜色为黑色
const MESSAGE = 'Su Mingcheng\'s \n        Blog';  // 要渲染的文本信息


function ThreeScene({domElementRef}) {
  const mountRef = useRef(null);  // 用于在组件内部管理和修改 HTML DOM 元素的引用
  let camera, scene, renderer, controls;  // 声明一些将被用到的变量

  // 使用 useEffect 在组件挂载后运行代码
  useEffect(() => {
    let width, height;
    if (domElementRef.current) {
      const rect = domElementRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
    }

    // 窗口大小改变时的回调函数
    const onWindowResize = () => {
      camera.aspect = width / height;  // 更新相机的长宽比
      camera.updateProjectionMatrix();  // 更新相机的投影矩阵

      renderer.setSize(width, height);  // 更新渲染器的尺寸

      render();  // 重新渲染场景
    }

    setupCameraAndScene(width, height);  // 设置相机和场景

    // 加载字体文件并生成形状
    fontLoader.load('./fonts/helvetiker_regular.typeface.json', function (font) {
      setupFontAndShapes(font);  // 设置字体和形状
      render();  // 渲染场景
    });

    setupRendererAndControls(width, height);  // 设置渲染器和控制器

    // 监听窗口大小改变事件
    window.addEventListener('resize', onWindowResize);

    // 清理函数，在组件卸载时调用
    return () => {
      window.removeEventListener('resize', onWindowResize);  // 移除窗口大小改变事件监听
      mountRef.current.removeChild(renderer.domElement);  // 移除渲染器的 DOM 元素
    };
  }, []);

  // 创建相机和场景的方法
  const setupCameraAndScene = (width, height) => {
    camera = new THREE.PerspectiveCamera(20, width / height, 1, 10000);  // 创建透视相机
    camera.position.set(0, 1, 500);  // 设置相机的位置

    scene = new THREE.Scene();  // 创建一个新的场景
    scene.background = new THREE.Color(0xffffff);  // 设置场景背景颜色为白色
  }

  // 加载字体和生成形状的方法
  const setupFontAndShapes = (font) => {
    const matDark = new THREE.LineBasicMaterial({
      color: COLOR,  // 线条颜色
      side: THREE.DoubleSide,  // 两侧都可见
    });

    const matLite = new THREE.MeshBasicMaterial({
      color: COLOR,  // 材料颜色
      transparent: true,  // 允许材料透明
      opacity: 0.5,  // 定义透明度
      side: THREE.DoubleSide  // 两侧都可见
    });

    const shapes = font.generateShapes(MESSAGE, 40);  // 根据提供的字体和消息生成形状

    const geometry = new THREE.ShapeGeometry(shapes);  // 通过形状生成几何体

    geometry.computeBoundingBox();  // 计算几何体的边界框

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);  // 计算形状中心

    geometry.translate(xMid, -40, 0);  // 将形状中心移动到原点

    const text = new THREE.Mesh(geometry, matLite);  // 通过几何体和材料创建网格对象
    text.position.z = -150;  // 设置文本的 z 位置
    scene.add(text);  // 将网格对象添加到场景中

    const holeShapes = [];  // 创建一个保存孔洞形状的数组

    for (let i = 0; i < shapes.length; i++) {
      const shape = shapes[i];
      if (shape.holes && shape.holes.length > 0) {
        for (let j = 0; j < shape.holes.length; j++) {
          const hole = shape.holes[j];
          holeShapes.push(hole);  // 将孔洞形状添加到数组中
        }
      }
    }

    shapes.push.apply(shapes, holeShapes);  // 将孔洞形状添加到形状数组中

    const lineText = new THREE.Object3D();  // 创建一个新的 3D 对象

    for (let i = 0; i < shapes.length; i++) {
      const shape = shapes[i];
      const points = shape.getPoints();  // 获取形状的所有点
      const geometry = new THREE.BufferGeometry().setFromPoints(points);  // 通过点生成几何体
      geometry.translate(xMid, 0, 0);  // 将几何体移动到原点
      const lineMesh = new THREE.Line(geometry, matDark);  // 通过几何体和材料创建线条对象
      lineText.add(lineMesh);  // 将线条对象添加到 3D 对象中
    }
    scene.add(lineText);  // 将 3D 对象添加到场景中
  }

  // 创建渲染器和控制器的方法
  const setupRendererAndControls = (width, height) => {
    renderer = new THREE.WebGLRenderer({antialias: true});  // 创建 WebGLRenderer 并开启抗锯齿
    renderer.setPixelRatio(window.devicePixelRatio);  // 设置渲染器的设备像素比
    renderer.setSize(width, height);  // 设置渲染器的尺寸
    mountRef.current.appendChild(renderer.domElement);  // 将渲染器的 DOM 元素添加到页面中

    controls = new OrbitControls(camera, renderer.domElement);  // 创建 OrbitControls
    controls.target.set(0, 0, 0);  // 设置控制器的目标
    controls.update();  // 更新控制器

    controls.addEventListener('change', render);  // 在控制器改变时调用 render 函数
  }


  // 渲染场景和相机
  const render = () => {
    renderer.render(scene, camera);  // 使用渲染器渲染场景和相机
  }

  // 返回一个包含 ref 的 div，用于渲染 Three.js 的内容
  return <div ref={mountRef}/>;
}

export default ThreeScene;  // 导出 ThreeScene 组件
