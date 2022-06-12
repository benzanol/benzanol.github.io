sed -i '/<\/html>/d' index.html

echo '<!DOCTYPE html>' > index.html
echo '<html>' >> index.html

echo '<style>' >> index.html
cat ./src/styles.css >> index.html
echo '</style>' >> index.html

echo '<style>' >> index.html
cat ./node_modules/mathquill/build/mathquill.css >> index.html
echo '</style>' >> index.html

cat ./src/html.html >> index.html

echo '<script>' >> index.html
cat ./node_modules/jquery/dist/jquery.min.js >> index.html
cat ./node_modules/mathquill/build/mathquill.min.js >> index.html
cat ./src/js.js >> index.html
cat ./src/main.js >> index.html
echo '</script>' >> index.html

echo '</html>' >> index.html
