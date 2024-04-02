document.addEventListener('DOMContentLoaded', function() {
  // Identify the current page by its name
  const path = window.location.pathname;
  const pageName = path.split("/").pop(); // Gets the last part of the path, assuming it's the filename like 'machinery.html'

  if (pageName === 'section1') {
    // Machinery management code
    console.log('Machinery page script');
    const submitButton = document.querySelector('button[type="button"]');
    submitButton.addEventListener('click', () => {
      console.log('Machinery request submitted');
    });
  } else if (pageName === 'section2') {
    // Materials management code
    console.log('Materials page script');
  } else if (pageName === 'section3') {
    // Task manager code
    console.log('Tasks page script');
  } else if (pageName === 'section4') {
    // Communication code
    console.log('Communication page script');
  }
});
