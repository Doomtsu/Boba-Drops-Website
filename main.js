function addTask() {
  const taskInput = document.getElementById('taskInput');
  const tasksContainer = document.querySelector('.tasks');
  
  if (taskInput.value.trim()) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task frost-effect fade-slide-in';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'task' + (document.querySelectorAll('.task').length + 1);
    
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = taskInput.value + ' ✨';
    
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    
    tasksContainer.appendChild(taskDiv);
    taskInput.value = '';
    
    addSparkles(taskDiv);
  }
}

function addSparkles(element) {
  for (let i = 0; i < 3; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    element.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1500);
  }
}

function createSnowflakes() {
  const snowflakes = ['❄', '❅', '❆'];
  const container = document.querySelector('.snowfall');
  
  setInterval(() => {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = (Math.random() * 20 + 10) + 'px';
    snowflake.style.opacity = Math.random() * 0.6 + 0.2;
    container.appendChild(snowflake);
    
    setTimeout(() => snowflake.remove(), 6000);
  }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
  createSnowflakes();
});

document.addEventListener('change', function(e) {
  if (e.target.type === 'checkbox') {
    const label = e.target.nextElementSibling;
    if (e.target.checked) {
      label.style.textDecoration = 'line-through';
      label.style.opacity = '0.6';
      addSparkles(e.target.parentElement);
    } else {
      label.style.textDecoration = 'none';
      label.style.opacity = '1';
    }
  }
});