* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', sans-serif;
  background: #fff;
  color: #222;
  line-height: 1.6;
  scroll-behavior: smooth;
}

section {
  padding: 60px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #eee;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.8rem;
  color: #3e3e3e;
  margin-bottom: 10px;
}

h2 {
  font-size: 2rem;
  color: #444;
  margin-bottom: 15px;
}

ul, ol {
  margin-left: 20px;
  padding-left: 10px;
}

p {
  margin-bottom: 1em;
}

.title-slide {
  background: #fdf4e3;
  text-align: center;
}

.title-slide .tagline {
  font-size: 1.2rem;
  font-style: italic;
  color: #555;
  margin-bottom: 1em;
}

.final-slide {
  background: #eafcf1;
  text-align: center;
}

.final-slide .call {
  margin-top: 1em;
  font-weight: bold;
  font-size: 1.1rem;
}

.note {
  font-style: italic;
  font-size: 0.9em;
  color: #777;
}

.fade {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s ease-out;
}

.fade.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 600px) {
  section {
    padding: 40px 15px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.4rem;
  }
}