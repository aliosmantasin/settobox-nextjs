const MIN_SPEED = 0.5;
const MAX_SPEED = 1;

function randomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export class Blob {
  el: HTMLElement;
  size: number;
  initialX: number;
  initialY: number;
  vx: number;
  vy: number;
  x: number;
  y: number;

  constructor(el: HTMLElement, container: HTMLElement) {
    this.el = el;
    const containerRect = container.getBoundingClientRect();
    const isMobile = window.innerWidth <= 500;

    // Mobil ekranlarda boyutları küçültmek için size değerini ayarlıyoruz.
    this.size = isMobile ? containerRect.width * 0.2 : containerRect.width * 0.25;

    // Hareket alanını mobilde %100 yapıyoruz
    const movementAreaWidth = isMobile ? containerRect.width - this.size : containerRect.width - this.size;
    const movementAreaHeight = containerRect.height - this.size; // Aşağı taşmayı engellemek için

    this.el.style.width = `${this.size}px`;
    this.el.style.height = `${this.size}px`;

    this.initialX = randomNumber(0, movementAreaWidth);
    this.initialY = randomNumber(0, movementAreaHeight);
    this.el.style.top = `${this.initialY}px`;
    this.el.style.left = `${this.initialX}px`;

    this.vx = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.vy = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.x = this.initialX;
    this.y = this.initialY;
  }

  update(container: HTMLElement) {
    const containerRect = container.getBoundingClientRect();
    const isMobile = window.innerWidth <= 500;
    const movementAreaWidth = isMobile ? containerRect.width - this.size : containerRect.width - this.size;
    const movementAreaHeight = containerRect.height - this.size; // Aşağı taşmayı engellemek için

    this.x += this.vx;
    this.y += this.vy;

    if (this.x >= movementAreaWidth) {
      this.x = movementAreaWidth;
      this.vx *= -1;
    }
    if (this.y >= movementAreaHeight) {
      this.y = movementAreaHeight;
      this.vy *= -1;
    }
    if (this.x <= 0) {
      this.x = 0;
      this.vx *= -1;
    }
    if (this.y <= 0) {
      this.y = 0;
      this.vy *= -1;
    }
  }

  move() {
    this.el.style.transform = `translate(${this.x - this.initialX}px, ${this.y - this.initialY}px)`;
  }
}

export function initBlobs() {
  const containerEl = document.querySelector('.bouncing-blobs-container') as HTMLElement;
  const blobEls = document.querySelectorAll<HTMLElement>('.bouncing-blob');
  const blobs = Array.from(blobEls).map((blobEl) => new Blob(blobEl, containerEl));

  function update() {
    requestAnimationFrame(update);
    blobs.forEach((blob) => {
      blob.update(containerEl);
      blob.move();
    });
  }

  requestAnimationFrame(update);
}
