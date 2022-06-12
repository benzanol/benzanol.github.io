     const MQ = MathQuill.getInterface(2);

     function formatEquation(eqn) {
         MQ.MathField(eqn, {
             handlers: {
                 edit: (field) => {
                     const elem = field.__controller.container.context;
                     updateLatex(elem.getAttribute('hid'), MQ(elem).latex());
                 }
             }
         });
     }

     // Format all elements with class 'mq-static' as latex equations
     function formatStaticEquations() {
         var spans = document.getElementsByClassName('mq-static');
         for (let i = 0; i < spans.length; i++) {
             MQ.StaticMath(spans[i]);
         }
     }

     function createDiagonalPattern(color = 'black') {
         // create a 10x10 px canvas for the pattern's base shape
         let shape = document.createElement('canvas')
         let c = shape.getContext('2d')
         let [w, h] = [12, 12]
         shape.width = w
         shape.height = h

         c.lineWidth = 3

         console.log(color)
         // draw 1st line of the shape 
         c.strokeStyle = color

         c.beginPath()
         // Top left to bottom right
         c.moveTo(-0.5*w, 0)
         c.lineTo(w, 1.5*h)
         c.moveTo(0, -0.5*h)
         c.lineTo(1.5*w, h)

         // Bottom left to top right
         c.moveTo(-0.5*w, h)
         c.lineTo(w, -0.5*h)
         c.moveTo(0, 1.5*h)
         c.lineTo(1.5*w, 0)

         c.stroke()
         // create the pattern from the shape
         return c.createPattern(shape, 'repeat')
     }
