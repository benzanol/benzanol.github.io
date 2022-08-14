echo '<!DOCTYPE html>' > index.html
echo '<html>' >> index.html

echo '<style>' >> index.html
cat ./src/styles.css >> index.html
echo '</style>' >> index.html

echo '<style>' >> index.html
cat ./src/node_modules/mathquill/build/mathquill.css >> index.html
echo '</style>' >> index.html

sed -n '/<body>/,/<\/body>/p' src/index.html >> index.html

echo '<script>' >> index.html
cat ./src/node_modules/jquery/dist/jquery.min.js >> index.html
cat ./src/node_modules/mathquill/build/mathquill.min.js >> index.html

cat $(ls src/src | grep -v scala | xargs -I{} echo "src/src/"{}) >> index.html
cat ./src/src/scala.js >> index.html

echo '</script>' >> index.html

echo '</html>' >> index.html
