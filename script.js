// 平滑滚动到锚点功能
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  // 选择所有以#开头的锚点链接
  anchor.addEventListener("click", function (e) {
    // 为每个锚点添加点击事件监听器
    e.preventDefault()
    // 阻止默认链接跳转行为
    const target = document.querySelector(this.getAttribute("href"))
    // 根据链接的href属性找到目标元素
    if (target) {
      // 如果目标元素存在
      target.scrollIntoView({
        // 平滑滚动到目标位置
        behavior: "smooth",
        // 设置滚动行为为平滑
        block: "start",
        // 将目标元素顶部对齐到视口顶部
      })
    }
  })
})

// 导航栏滚动效果
window.addEventListener("scroll", () => {
  // 监听窗口滚动事件
  const navbar = document.getElementById("navbar")
  // 获取导航栏元素
  if (window.scrollY > 100) {
    // 如果页面向下滚动超过100像素
    navbar.classList.add("scrolled")
    // 给导航栏添加"scrolled"类名，触发样式变化
  } else {
    // 如果滚动距离小于等于100像素
    navbar.classList.remove("scrolled")
    // 移除"scrolled"类名，恢复原始样式
  }
})

// 简化的淡入动画观察器配置
const observerOptions = {
  // 定义观察器选项对象
  threshold: 0.1,
  // 当目标元素10%可见时触发回调
  rootMargin: "0px 0px -50px 0px",
  // 设置根边距，底部减少50px的触发区域
}

const observer = new IntersectionObserver((entries) => {
  // 创建交叉观察器实例
  entries.forEach((entry) => {
    // 遍历所有观察的条目
    if (entry.isIntersecting) {
      // 如果元素进入视口
      entry.target.classList.add("visible")
      // 给目标元素添加"visible"类名，触发淡入动画
    }
  })
}, observerOptions)
// 使用上面定义的选项

document.querySelectorAll(".fade-in").forEach((el) => {
  // 选择所有带有"fade-in"类的元素
  observer.observe(el)
  // 开始观察每个元素
})

// 简化的图片悬停效果
document.addEventListener("DOMContentLoaded", () => {
  // 等待DOM内容加载完成
  const imageWrappers = document.querySelectorAll(".fi-image-wrapper")
  // 选择所有图片包装器元素

  imageWrappers.forEach((wrapper) => {
    // 遍历每个图片包装器
    wrapper.addEventListener("mouseenter", function () {
      // 添加鼠标进入事件监听器
      this.style.transform = "scale(1.05)"
      // 鼠标悬停时放大1.05倍
    })

    wrapper.addEventListener("mouseleave", function () {
      // 添加鼠标离开事件监听器
      this.style.transform = "scale(1)"
      // 鼠标离开时恢复原始大小
    })
  })
})

// 简化的按钮效果
document.addEventListener("DOMContentLoaded", () => {
  // 等待DOM内容加载完成
  const mayaButton = document.querySelector(".maya-button")
  // 选择Maya按钮元素

  if (mayaButton) {
    // 如果按钮存在
    mayaButton.addEventListener("click", function () {
      // 添加点击事件监听器
      this.style.transform = "scale(0.95)"
      // 点击时缩小到95%
      setTimeout(() => {
        // 设置延时函数
        this.style.transform = "scale(1)"
        // 150毫秒后恢复原始大小
      }, 150)
    })
  }
})

// 简化的卡片悬停效果
document.addEventListener("DOMContentLoaded", () => {
  // 等待DOM内容加载完成
  const outcomeCards = document.querySelectorAll(".outcome-card")
  // 选择所有结果卡片元素

  outcomeCards.forEach((card) => {
    // 遍历每个卡片
    card.addEventListener("mouseenter", function () {
      // 添加鼠标进入事件监听器
      this.style.transform = "translateY(-5px)"
      // 鼠标悬停时向上移动5像素
    })

    card.addEventListener("mouseleave", function () {
      // 添加鼠标离开事件监听器
      this.style.transform = "translateY(0)"
      // 鼠标离开时恢复原始位置
    })
  })
})
