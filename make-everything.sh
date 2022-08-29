echo '<!DOCTYPE html>' > index.html
echo '<html>' >> index.html

echo '<style>' >> index.html
cat ./src/styles.css >> index.html
echo '</style>' >> index.html

echo '<style>' >> index.html
cat ./src/node_modules/katex/dist/katex.css >> index.html
cat ./src/node_modules/mathquill/build/mathquill.css >> index.html
echo '</style>' >> index.html

sed -n '/<body>/,/<\/body>/p' src/index.html >> index.html

echo '<script>' >> index.html
cat ./src/node_modules/katex/dist/katex.min.js >> index.html

cat ./src/node_modules/jquery/dist/jquery.min.js >> index.html
cat ./src/node_modules/mathquill/build/mathquill.min.js >> index.html

cat ./src/src/main.js >> index.html
cat ./src/src/scala.js >> index.html

echo '</script>' >> index.html

echo '</html>' >> index.html
