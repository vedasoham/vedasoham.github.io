--- /dev/null
+++ c:\Users\soham\OneDrive\GBU\website\git\vedasoham.github.io\matrix_bg.js
@@ -0,0 +1,59 @@
+(function() {
+   const canvas = document.getElementById('sequenceCanvas');
+   if (!canvas) return;
+   const ctx = canvas.getContext('2d');
+   
+   // High-DPI / Retina Display Support for Sharp Text
+   const dpr = window.devicePixelRatio || 1;
+   canvas.width = window.innerWidth * dpr;
+   canvas.height = window.innerHeight * dpr;
+   ctx.scale(dpr, dpr);
+
+   // Protein alphabet (Amino Acids) + The 5 Human Values
+   const sequences = "ACDEFGHIKLMNPQRSTVWY"; 
+   const values = ["SATYA", "DHARMA", "SHANTI", "PREMA", "AHIMSA", "Integrity", "Compassion", "Teamwork", "Leadership"];
+   const projects = ["NirA", "PBP2a", "Deep-Docking", "AntiMicrobial Resistance", "Machine Learning", "QSAR", "E-Pharmacophore", "ADMET", "MD Simulation" ]; 
+
+   const fontSize = 14; 
+   let columns = Math.floor(window.innerWidth / fontSize);
+   let drops = Array(Math.floor(columns)).fill(1);
+
+   function draw() {
+       // Subtle trailing effect (Dark Navy Fade for Dark Mode)
+       ctx.fillStyle = 'rgba(10, 25, 47, 0.15)'; 
+       ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
+
+       // Style for the "Data" (Amino Acids)
+       ctx.font = fontSize + 'px "Consolas", "Monaco", "Courier New", monospace';
+
+       for (let i = 0; i < drops.length; i++) {
+           // Logic: Highlight values based on scroll percentage
+           const scrollable = document.body.scrollHeight - window.innerHeight;
+           const scrollPercent = scrollable > 0 ? window.scrollY / scrollable : 0;
+           
+           let text;
+           if (Math.random() > 0.98 && scrollPercent > 0.1) {
+               // Occasionally drop a project name or a value
+               text = Math.random() > 0.5 ? values[Math.floor(Math.random() * values.length)] : projects[Math.floor(Math.random() * projects.length)];
+               ctx.fillStyle = '#90caf9'; // Bright Blue for keywords
+           } else {
+               text = sequences.charAt(Math.floor(Math.random() * sequences.length));
+               ctx.fillStyle = 'rgba(144, 202, 249, 0.15)'; // Faded blue for background noise
+           }
+
+           ctx.fillText(text, i * fontSize, drops[i] * fontSize);
+
+           if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
+               drops[i] = 0;
+           }
+           drops[i]++;
+       }
+   }
+
+   // Ensure it resizes if you change window size
+  window.addEventListener('resize', () => {
+      const newDpr = window.devicePixelRatio || 1;
+      canvas.width = window.innerWidth * newDpr;
+      canvas.height = window.innerHeight * newDpr;
+      ctx.scale(newDpr, newDpr);
+
+       // Recalculate columns and drops to prevent empty spaces
+       columns = Math.floor(window.innerWidth / fontSize);
+       drops = Array(Math.floor(columns)).fill(1);
+   });
+
+   setInterval(draw, 33);
+})();

