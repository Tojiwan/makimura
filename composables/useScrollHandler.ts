export const useScrollHandler = (threshold = 100) => {
    // Reactive state for visibility
    const isHeaderFixed = ref(false)
  
    // Handle scroll and update visibility
    const handleScroll = () => {
      const scrollPos = window.scrollY
      isHeaderFixed.value = scrollPos > threshold
    }
  
    // Scroll to top with smooth behavior
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  
    // Setup scroll event listener
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Initialize the state on mount
    })
  
    // Clean up scroll event listener
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  
    return {
      isHeaderFixed,
      scrollToTop
    }
  }