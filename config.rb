# Require any additional compass plugins here.
add_import_path "bower_components/foundation/scss"

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "fahey-rodriguez4877-5079530/assets"
sass_dir = "fahey-rodriguez4877-5079530/assets"
images_dir = "fahey-rodriguez4877-5079530/assets"
javascripts_dir = "fahey-rodriguez4877-5079530/assets"


on_stylesheet_saved do |filename|
  move_to = filename + ".liquid"
  puts "Moving from #{filename} to #{move_to}"
  FileUtils.mv(filename, move_to)
end


# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
