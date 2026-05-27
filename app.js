// App logic with initial Yes/No gateway and FLU decision gateway
const stepContainer = document.getElementById('step-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentStep = 0;
let branch = null; // track gateway path ('svieti', 'blika', 'nebliká')
let startAnswered = false; // whether the initial water question was answered

// Function to scroll to top of step-container
function scrollToTop() {
  stepContainer.scrollTop = 0;
}

function renderStep() {
  // If at the very start and user hasn't answered the water question, show initial GTW
  if (currentStep === 0 && !startAnswered) {
    stepContainer.innerHTML = `
      <h2>Je voda v kávovare?</h2>
      <div class="start-image-wrap">
        <img src="resources/step1.jpg" alt="Kontrola vody" class="step-photo" onerror="this.style.display='none'">
      </div>
      <div class="gateway-text">Vyberte možnosť:</div>
      <div class="gateway-buttons">
        <button id="start-yes">Áno</button>
        <button id="start-no">Nie</button>
      </div>
    `;

    // Hide main navigation while deciding
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';

    scrollToTop();

    document.getElementById('start-yes').addEventListener('click', () => {
      startAnswered = true;
      // user has water -> go to step index 1 (second step)
      currentStep = 1;
      renderStep();
    });

    document.getElementById('start-no').addEventListener('click', () => {
      startAnswered = true;
      // user does not have water -> stay/go to step index 0
      currentStep = 0;
      renderStep();
    });

    return;
  }

  const step = steps[currentStep];

  // Build the content template and reserve image area
  stepContainer.innerHTML = `
    <h2>${step.title}</h2>
    <div class="image-wrap" aria-hidden="true"></div>
    <p>${step.description}</p>
  `;

  const imageWrap = stepContainer.querySelector('.image-wrap');

  // Support both string and array images
  function showFallback() {
    imageWrap.innerHTML = '';
    const fallback = document.createElement('div');
    fallback.className = 'no-image';
    fallback.textContent = 'Žiadna fotka';
    imageWrap.appendChild(fallback);
  }

  if (step.image) {
    if (Array.isArray(step.image)) {
      imageWrap.innerHTML = '';
      const pair = document.createElement('div');
      pair.className = 'image-pair';
      imageWrap.appendChild(pair);
      step.image.forEach(src => {
        const img = new Image();
        img.className = 'step-photo';
        img.alt = step.title || '';
        img.src = src;
        img.onload = () => pair.appendChild(img);
        img.onerror = () => {
          const fallback = document.createElement('div');
          fallback.className = 'no-image';
          fallback.textContent = 'Žiadna fotka';
          pair.appendChild(fallback);
        };
      });
    } else {
      const img = new Image();
      img.className = 'step-photo';
      img.alt = step.title || '';
      img.src = step.image;
      img.onload = () => {
        imageWrap.setAttribute('aria-hidden', 'false');
        imageWrap.innerHTML = '';
        imageWrap.appendChild(img);
      };
      img.onerror = () => showFallback();
    }
  } else {
    // Don't show fallback on gateway step
    if (currentStep !== 3) showFallback();
  }

  // Default: show main navigation buttons
  prevBtn.style.display = '';
  nextBtn.style.display = '';
  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === steps.length - 1;

  // Decision gateway after step 4 (index 3)
  if (currentStep === 3) {
    // Hide default navigation while user chooses
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';

    const gateway = document.createElement('div');
    gateway.className = 'gateway';
    gateway.innerHTML = `
      <div class="gateway-text">Vyber stav indikátora:</div>
      <div class="gateway-buttons">
        <div class="gateway-option">
          <img src="resources/step7.jpg" class="gateway-img" onerror="this.style.display='none'">
          <button class="gateway-btn" data-choice="svieti">Svieti FLU</button>
        </div>
        <div class="gateway-option">
          <img src="resources/step8.jpg" class="gateway-img" onerror="this.style.display='none'">
          <button class="gateway-btn" data-choice="blika">Bliká FLU/teplota</button>
        </div>
        <div class="gateway-option">
          <img src="resources/step11.jpg" class="gateway-img" onerror="this.style.display='none'">
          <button class="gateway-btn" data-choice="neblika">Nebliká svieti teplota</button>
        </div>
      </div>
    `;

    stepContainer.appendChild(gateway);

    // Attach handlers - map choices to the correct target steps
    gateway.querySelectorAll('.gateway-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const choice = e.currentTarget.dataset.choice;
        if (choice === 'svieti') {
          // 'Svieti FLU' -> go to step index 4 (step 5)
          currentStep = 4;
          branch = 'svieti';
        } else if (choice === 'blika') {
          // 'Bliká' -> go to step index 5
          currentStep = 5;
          branch = 'blika';
        } else if (choice === 'neblika') {
          // 'Nebliká' -> go to step index 7
          currentStep = 7;
          branch = 'neblika';
        }
        renderStep();
      });
    });
  }

  // Clear branch when user leaves the decision region (keep it only between step 4 and 6 inclusive)
  if (currentStep < 3 || currentStep > 6) {
    branch = null;
  }

  // Scroll to top after rendering
  scrollToTop();
}

prevBtn.addEventListener('click', () => {
  // If user followed 'svieti' path, allow jumping back from step 7 (index 6) to step 5 (index 4)
  if (currentStep === 6 && branch === 'svieti') {
    currentStep = 4;
    renderStep();
    return;
  }

  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
});

nextBtn.addEventListener('click', () => {
  // If on step 5 (index 4) and user chose 'svieti', skip step 6 (index 5) and go to step 7 (index 6)
  if (currentStep === 4 && branch === 'svieti') {
    currentStep = 6;
    renderStep();
    return;
  }

  if (currentStep < steps.length - 1) {
    currentStep++;
    renderStep();
  }
});

// Initial render
renderStep();