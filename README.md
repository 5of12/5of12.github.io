# 5of12 Github Pages site
For blogs and content relating to our projects and open source repositories.

## Setup instructions

The site is built with Jekyll, setup instructions here: [Jekyll Installation](https://jekyllrb.com/docs/installation/)
That will take you through making sure Homebrew, Ruby and Jekyl are installed.

Once that's all setup install the github pages gem `gem install github-pages`

### Local testing

You can build and serve the files locally with Jekyll using `bundle exec jekyll serve` optionally with `--livereload`

### Remote builds

Merges to main will trigger a github action to build the site using the same Jekyll config.

# New Content

New pages are created as Markdown files that get converted to html following the rules of the Theme.

New blogs can be added by placing them in the `_posts` directory with a name formatted as `YYYY-MM-DD-title-of-blog`
