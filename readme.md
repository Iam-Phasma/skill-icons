<p align="center"><img align="center" width="280" src="./.github/text-logo.svg#gh-dark-mode-only"/></p>
<p align="center"><img align="center" width="280" src="./.github/text-logo-light.svg#gh-light-mode-only"/></p>
<h3 align="center">Showcase your skills on your GitHub or resumé with ease!</h3>
<hr>

# Credits

This project is based on the original work by [tandpfun/skill-icons](https://github.com/tandpfun/skill-icons).

# What This Fork Is For

This fork is focused on custom icon management so anyone can:

1. Use icons directly from this repository in GitHub READMEs.
2. Add new icons in batches from image files.
3. Generate themed and non-themed icon variants with consistent radius and padding.

# Use Icons In Your README

You can use icons by linking directly to files in this repository.

Example (raw GitHub URL):

```html
<img src="https://raw.githubusercontent.com/Iam-Phasma/skill-icons/main/icons/Perplexity.svg" width="48" />
<img src="https://raw.githubusercontent.com/Iam-Phasma/skill-icons/main/icons/Gemini-Dark.svg#gh-dark-mode-only" width="48" />
<img src="https://raw.githubusercontent.com/Iam-Phasma/skill-icons/main/icons/Gemini-Light.svg#gh-light-mode-only" width="48" />
```

Example (jsDelivr URL):

```html
<img src="https://cdn.jsdelivr.net/gh/Iam-Phasma/skill-icons@main/icons/Perplexity.svg" width="48" />
```

# Fork And Add Your Own Icons

1. Fork this repository.
2. Clone your fork.
3. Add source images into one of the upload folders.
4. Run one command to generate and rebuild icon metadata.
5. Use your own fork URL in your profile README.

## Quick Start

1. Drop image files (`.webp`, `.png`, `.jpg`, `.jpeg`, or `.svg`) into one of these folders:

```text
uploading/
	themed/
	light-only/
	dark-only/
```

2. Run:

```bash
npm run icons:upload:batch -- --upload-root uploading --output icons --size 256 --radius 60 --padding 24 --dark '#242938' --light '#F4F2ED'
```

3. Commit generated files from `icons/`.
4. Done: this command also rebuilds `dist/icons.json` and refreshes the Icons List section in this README.

## One Command For All Upload Folders

Use one command to process all upload queues at once:

```bash
npm run icons:upload:batch -- --upload-root uploading --output icons --size 256 --radius 60 --padding 24 --dark '#242938' --light '#F4F2ED'
```

Folder behavior:

1. `uploading/themed/` generates `Name-Dark.svg` and `Name-Light.svg`.
2. `uploading/light-only/` generates `Name-Light.svg` only.
3. `uploading/dark-only/` generates `Name-Dark.svg` only.

This command also rebuilds `dist/icons.json`, syncs the README Icons List, and deletes processed upload files after success.

Add `--no-cleanup` to keep source files.

Use `--dry-run` to preview outputs without generating files:

```bash
npm run icons:upload:batch -- --upload-root uploading --dry-run
```

# Icon Naming Notes

1. The icon ID is the lowercase filename (without extension).
2. Use `Name-Dark.svg` and `Name-Light.svg` for themed pairs.
3. Use `Name-Light.svg` or `Name-Dark.svg` when adding single-theme variants.

# README Icon List Automation

The upload batch command already refreshes the **Icons List** automatically.

You can still run this command manually any time you want to regenerate the list from files in `icons/`:

```bash
npm run icons:readme:sync
```

Rules used by the generator:

1. No duplicate IDs for light/dark pairs.
2. Prefer `-Light` when both `-Light` and `-Dark` exist.
3. If no `-Light` exists, use plain (`Name.svg`) or `-Dark` as fallback.

# Icons List

Here's a list of all the icons currently supported. Feel free to open an issue to suggest icons to add!

<a id="icons-jump"></a>

Jump to:
[A](#icons-a) | [B](#icons-b) | [C](#icons-c) | [D](#icons-d) | [E](#icons-e) | [F](#icons-f) | [G](#icons-g) | [H](#icons-h) | [I](#icons-i) | [J](#icons-j) | [K](#icons-k) | [L](#icons-l) | [M](#icons-m) | [N](#icons-n) | [O](#icons-o) | [P](#icons-p) | [Q](#icons-q) | [R](#icons-r) | [S](#icons-s) | [T](#icons-t) | [U](#icons-u) | [V](#icons-v) | [W](#icons-w) | [X](#icons-x) | [Y](#icons-y) | [Z](#icons-z)

<a id="icons-a"></a>
## A

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `ableton` | <img src="./icons/Ableton-Light.svg" width="48"> |
| `activitypub` | <img src="./icons/ActivityPub-Light.svg" width="48"> |
| `actix` | <img src="./icons/Actix-Light.svg" width="48"> |
| `adonis` | <img src="./icons/Adonis.svg" width="48"> |
| `aftereffects` | <img src="./icons/AfterEffects.svg" width="48"> |
| `aiscript` | <img src="./icons/AiScript-Light.svg" width="48"> |
| `alpinejs` | <img src="./icons/AlpineJS-Light.svg" width="48"> |
| `anaconda` | <img src="./icons/Anaconda-Light.svg" width="48"> |
| `android` | <img src="./icons/Android-Light.svg" width="48"> |
| `androidstudio` | <img src="./icons/AndroidStudio-Light.svg" width="48"> |
| `angular` | <img src="./icons/Angular-Light.svg" width="48"> |
| `ansible` | <img src="./icons/Ansible.svg" width="48"> |
| `apollo` | <img src="./icons/Apollo.svg" width="48"> |
| `apple` | <img src="./icons/Apple-Light.svg" width="48"> |
| `appwrite` | <img src="./icons/Appwrite.svg" width="48"> |
| `arch` | <img src="./icons/Arch-Light.svg" width="48"> |
| `arduino` | <img src="./icons/Arduino.svg" width="48"> |
| `astro` | <img src="./icons/Astro.svg" width="48"> |
| `atom` | <img src="./icons/Atom.svg" width="48"> |
| `audition` | <img src="./icons/Audition.svg" width="48"> |
| `autocad` | <img src="./icons/AutoCAD-Light.svg" width="48"> |
| `aws` | <img src="./icons/AWS-Light.svg" width="48"> |
| `azul` | <img src="./icons/Azul.svg" width="48"> |
| `azure` | <img src="./icons/Azure-Light.svg" width="48"> |

<a id="icons-b"></a>
## B

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `babel` | <img src="./icons/Babel.svg" width="48"> |
| `bash` | <img src="./icons/Bash-Light.svg" width="48"> |
| `bevy` | <img src="./icons/Bevy-Light.svg" width="48"> |
| `bitbucket` | <img src="./icons/BitBucket-Light.svg" width="48"> |
| `blender` | <img src="./icons/Blender-Light.svg" width="48"> |
| `bootstrap` | <img src="./icons/Bootstrap.svg" width="48"> |
| `bsd` | <img src="./icons/BSD-Light.svg" width="48"> |
| `bun` | <img src="./icons/Bun-Light.svg" width="48"> |

<a id="icons-c"></a>
## C

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `c` | <img src="./icons/C.svg" width="48"> |
| `cassandra` | <img src="./icons/Cassandra-Light.svg" width="48"> |
| `chatgpt` | <img src="./icons/ChatGPT-Light.svg" width="48"> |
| `claude` | <img src="./icons/Claude-Light.svg" width="48"> |
| `clion` | <img src="./icons/CLion-Light.svg" width="48"> |
| `clojure` | <img src="./icons/Clojure-Light.svg" width="48"> |
| `cloudflare` | <img src="./icons/Cloudflare-Light.svg" width="48"> |
| `cmake` | <img src="./icons/CMake-Light.svg" width="48"> |
| `codepen` | <img src="./icons/CodePen-Light.svg" width="48"> |
| `coffeescript` | <img src="./icons/CoffeeScript-Light.svg" width="48"> |
| `copilot` | <img src="./icons/Copilot-Light.svg" width="48"> |
| `cpp` | <img src="./icons/CPP.svg" width="48"> |
| `crystal` | <img src="./icons/Crystal-Light.svg" width="48"> |
| `cs` | <img src="./icons/CS.svg" width="48"> |
| `css` | <img src="./icons/CSS.svg" width="48"> |
| `cursor` | <img src="./icons/Cursor-Light.svg" width="48"> |
| `cypress` | <img src="./icons/Cypress-Light.svg" width="48"> |

<a id="icons-d"></a>
## D

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `d3` | <img src="./icons/D3-Light.svg" width="48"> |
| `dart` | <img src="./icons/Dart-Light.svg" width="48"> |
| `debian` | <img src="./icons/Debian-Light.svg" width="48"> |
| `deepseek` | <img src="./icons/DeepSeek-Light.svg" width="48"> |
| `deno` | <img src="./icons/DENO-Light.svg" width="48"> |
| `devto` | <img src="./icons/DevTo-Light.svg" width="48"> |
| `discord` | <img src="./icons/Discord.svg" width="48"> |
| `discordbots` | <img src="./icons/DiscordBots.svg" width="48"> |
| `discordjs` | <img src="./icons/DiscordJS-Light.svg" width="48"> |
| `django` | <img src="./icons/Django.svg" width="48"> |
| `docker` | <img src="./icons/Docker.svg" width="48"> |
| `dotnet` | <img src="./icons/DotNet.svg" width="48"> |
| `dynamodb` | <img src="./icons/DynamoDB-Light.svg" width="48"> |

<a id="icons-e"></a>
## E

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `eclipse` | <img src="./icons/Eclipse-Light.svg" width="48"> |
| `elasticsearch` | <img src="./icons/Elasticsearch-Light.svg" width="48"> |
| `electron` | <img src="./icons/Electron.svg" width="48"> |
| `elevenlabs` | <img src="./icons/ElevenLabs.svg" width="48"> |
| `elixir` | <img src="./icons/Elixir-Light.svg" width="48"> |
| `elysia` | <img src="./icons/Elysia-Light.svg" width="48"> |
| `emacs` | <img src="./icons/Emacs.svg" width="48"> |
| `ember` | <img src="./icons/Ember.svg" width="48"> |
| `emotion` | <img src="./icons/Emotion-Light.svg" width="48"> |
| `expressjs` | <img src="./icons/ExpressJS-Light.svg" width="48"> |

<a id="icons-f"></a>
## F

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `fastapi` | <img src="./icons/FastAPI.svg" width="48"> |
| `fediverse` | <img src="./icons/Fediverse-Light.svg" width="48"> |
| `figma` | <img src="./icons/Figma-Light.svg" width="48"> |
| `firebase` | <img src="./icons/Firebase-Light.svg" width="48"> |
| `flask` | <img src="./icons/Flask-Light.svg" width="48"> |
| `flutter` | <img src="./icons/Flutter-Light.svg" width="48"> |
| `forth` | <img src="./icons/Forth.svg" width="48"> |
| `fortran` | <img src="./icons/Fortran.svg" width="48"> |

<a id="icons-g"></a>
## G

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `gamemakerstudio` | <img src="./icons/GameMakerStudio.svg" width="48"> |
| `gatsby` | <img src="./icons/Gatsby.svg" width="48"> |
| `gcp` | <img src="./icons/GCP-Light.svg" width="48"> |
| `gemini` | <img src="./icons/Gemini-Light.svg" width="48"> |
| `gherkin` | <img src="./icons/Gherkin-Light.svg" width="48"> |
| `git` | <img src="./icons/Git.svg" width="48"> |
| `github` | <img src="./icons/Github-Light.svg" width="48"> |
| `githubactions` | <img src="./icons/GithubActions-Light.svg" width="48"> |
| `githubcopilot` | <img src="./icons/GithubCopilot.svg" width="48"> |
| `gitlab` | <img src="./icons/GitLab-Light.svg" width="48"> |
| `gmail` | <img src="./icons/Gmail-Light.svg" width="48"> |
| `godot` | <img src="./icons/Godot-Light.svg" width="48"> |
| `golang` | <img src="./icons/GoLang.svg" width="48"> |
| `gradle` | <img src="./icons/Gradle-Light.svg" width="48"> |
| `grafana` | <img src="./icons/Grafana-Light.svg" width="48"> |
| `graphql` | <img src="./icons/GraphQL-Light.svg" width="48"> |
| `grok` | <img src="./icons/Grok.svg" width="48"> |
| `gtk` | <img src="./icons/GTK-Light.svg" width="48"> |
| `gulp` | <img src="./icons/Gulp.svg" width="48"> |

<a id="icons-h"></a>
## H

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `haskell` | <img src="./icons/Haskell-Light.svg" width="48"> |
| `haxe` | <img src="./icons/Haxe-Light.svg" width="48"> |
| `haxeflixel` | <img src="./icons/HaxeFlixel-Light.svg" width="48"> |
| `heroku` | <img src="./icons/Heroku.svg" width="48"> |
| `hibernate` | <img src="./icons/Hibernate-Light.svg" width="48"> |
| `html` | <img src="./icons/HTML.svg" width="48"> |
| `htmx` | <img src="./icons/Htmx-Light.svg" width="48"> |
| `huggingface` | <img src="./icons/HuggingFace-Light.svg" width="48"> |

<a id="icons-i"></a>
## I

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `idea` | <img src="./icons/Idea-Light.svg" width="48"> |
| `illustrator` | <img src="./icons/Illustrator.svg" width="48"> |
| `instagram` | <img src="./icons/Instagram.svg" width="48"> |
| `ipfs` | <img src="./icons/IPFS-Light.svg" width="48"> |

<a id="icons-j"></a>
## J

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `java` | <img src="./icons/Java-Light.svg" width="48"> |
| `javascript` | <img src="./icons/JavaScript.svg" width="48"> |
| `jenkins` | <img src="./icons/Jenkins-Light.svg" width="48"> |
| `jest` | <img src="./icons/Jest.svg" width="48"> |
| `jquery` | <img src="./icons/JQuery.svg" width="48"> |
| `julia` | <img src="./icons/Julia-Light.svg" width="48"> |

<a id="icons-k"></a>
## K

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `kafka` | <img src="./icons/Kafka.svg" width="48"> |
| `kali` | <img src="./icons/Kali-Light.svg" width="48"> |
| `kotlin` | <img src="./icons/Kotlin-Light.svg" width="48"> |
| `ktor` | <img src="./icons/Ktor-Light.svg" width="48"> |
| `kubernetes` | <img src="./icons/Kubernetes.svg" width="48"> |

<a id="icons-l"></a>
## L

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `laravel` | <img src="./icons/Laravel-Light.svg" width="48"> |
| `latex` | <img src="./icons/LaTeX-Light.svg" width="48"> |
| `less` | <img src="./icons/Less-Light.svg" width="48"> |
| `linkedin` | <img src="./icons/LinkedIn.svg" width="48"> |
| `linux` | <img src="./icons/Linux-Light.svg" width="48"> |
| `lit` | <img src="./icons/Lit-Light.svg" width="48"> |
| `lovable` | <img src="./icons/Lovable-Light.svg" width="48"> |
| `lua` | <img src="./icons/Lua-Light.svg" width="48"> |

<a id="icons-m"></a>
## M

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `markdown` | <img src="./icons/Markdown-Light.svg" width="48"> |
| `mastodon` | <img src="./icons/Mastodon-Light.svg" width="48"> |
| `materialui` | <img src="./icons/MaterialUI-Light.svg" width="48"> |
| `matlab` | <img src="./icons/Matlab-Light.svg" width="48"> |
| `maven` | <img src="./icons/Maven-Light.svg" width="48"> |
| `meta` | <img src="./icons/Meta-Light.svg" width="48"> |
| `midjourney` | <img src="./icons/Midjourney.svg" width="48"> |
| `mint` | <img src="./icons/Mint-Light.svg" width="48"> |
| `misskey` | <img src="./icons/Misskey-Light.svg" width="48"> |
| `mongodb` | <img src="./icons/MongoDB.svg" width="48"> |
| `mysql` | <img src="./icons/MySQL-Light.svg" width="48"> |

<a id="icons-n"></a>
## N

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `neovim` | <img src="./icons/NeoVim-Light.svg" width="48"> |
| `nestjs` | <img src="./icons/NestJS-Light.svg" width="48"> |
| `netlify` | <img src="./icons/Netlify-Light.svg" width="48"> |
| `nextjs` | <img src="./icons/NextJS-Light.svg" width="48"> |
| `nginx` | <img src="./icons/Nginx.svg" width="48"> |
| `nim` | <img src="./icons/Nim-Light.svg" width="48"> |
| `nix` | <img src="./icons/Nix-Light.svg" width="48"> |
| `nodejs` | <img src="./icons/NodeJS-Light.svg" width="48"> |
| `notebooklm` | <img src="./icons/NotebookLM.svg" width="48"> |
| `notion` | <img src="./icons/Notion-Light.svg" width="48"> |
| `npm` | <img src="./icons/Npm-Light.svg" width="48"> |
| `nuxtjs` | <img src="./icons/NuxtJS-Light.svg" width="48"> |

<a id="icons-o"></a>
## O

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `obsidian` | <img src="./icons/Obsidian-Light.svg" width="48"> |
| `ocaml` | <img src="./icons/OCaml.svg" width="48"> |
| `octave` | <img src="./icons/Octave-Light.svg" width="48"> |
| `opencv` | <img src="./icons/OpenCV-Light.svg" width="48"> |
| `openshift` | <img src="./icons/OpenShift.svg" width="48"> |
| `openstack` | <img src="./icons/OpenStack-Light.svg" width="48"> |

<a id="icons-p"></a>
## P

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `p5js` | <img src="./icons/p5js.svg" width="48"> |
| `perl` | <img src="./icons/Perl.svg" width="48"> |
| `perplexity` | <img src="./icons/Perplexity.svg" width="48"> |
| `photoshop` | <img src="./icons/Photoshop.svg" width="48"> |
| `php` | <img src="./icons/PHP-Light.svg" width="48"> |
| `phpstorm` | <img src="./icons/PhpStorm-Light.svg" width="48"> |
| `pinia` | <img src="./icons/Pinia-Light.svg" width="48"> |
| `pkl` | <img src="./icons/Pkl-Light.svg" width="48"> |
| `plan9` | <img src="./icons/Plan9-Light.svg" width="48"> |
| `planetscale` | <img src="./icons/PlanetScale-Light.svg" width="48"> |
| `pnpm` | <img src="./icons/Pnpm-Light.svg" width="48"> |
| `postgresql` | <img src="./icons/PostgreSQL-Light.svg" width="48"> |
| `postman` | <img src="./icons/Postman.svg" width="48"> |
| `powershell` | <img src="./icons/Powershell-Light.svg" width="48"> |
| `premiere` | <img src="./icons/Premiere.svg" width="48"> |
| `prisma` | <img src="./icons/Prisma.svg" width="48"> |
| `processing` | <img src="./icons/Processing-Light.svg" width="48"> |
| `prometheus` | <img src="./icons/Prometheus.svg" width="48"> |
| `pug` | <img src="./icons/Pug-Light.svg" width="48"> |
| `pycharm` | <img src="./icons/PyCharm-Light.svg" width="48"> |
| `python` | <img src="./icons/Python-Light.svg" width="48"> |
| `pytorch` | <img src="./icons/PyTorch-Light.svg" width="48"> |

<a id="icons-q"></a>
## Q

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `qt` | <img src="./icons/QT-Light.svg" width="48"> |
| `qwen` | <img src="./icons/Qwen.svg" width="48"> |

<a id="icons-r"></a>
## R

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `r` | <img src="./icons/R-Light.svg" width="48"> |
| `rabbitmq` | <img src="./icons/RabbitMQ-Light.svg" width="48"> |
| `rails` | <img src="./icons/Rails.svg" width="48"> |
| `raspberrypi` | <img src="./icons/RaspberryPi-Light.svg" width="48"> |
| `react` | <img src="./icons/React-Light.svg" width="48"> |
| `reactivex` | <img src="./icons/ReactiveX-Light.svg" width="48"> |
| `redhat` | <img src="./icons/RedHat-Light.svg" width="48"> |
| `redis` | <img src="./icons/Redis-Light.svg" width="48"> |
| `redux` | <img src="./icons/Redux.svg" width="48"> |
| `regex` | <img src="./icons/Regex-Light.svg" width="48"> |
| `remix` | <img src="./icons/Remix-Light.svg" width="48"> |
| `replit` | <img src="./icons/Replit-Light.svg" width="48"> |
| `rider` | <img src="./icons/Rider-Light.svg" width="48"> |
| `robloxstudio` | <img src="./icons/RobloxStudio.svg" width="48"> |
| `rocket` | <img src="./icons/Rocket.svg" width="48"> |
| `rollupjs` | <img src="./icons/RollupJS-Light.svg" width="48"> |
| `ros` | <img src="./icons/ROS-Light.svg" width="48"> |
| `ruby` | <img src="./icons/Ruby.svg" width="48"> |
| `rust` | <img src="./icons/Rust.svg" width="48"> |

<a id="icons-s"></a>
## S

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `sass` | <img src="./icons/Sass.svg" width="48"> |
| `scala` | <img src="./icons/Scala-Light.svg" width="48"> |
| `scikitlearn` | <img src="./icons/SciKitLearn-Light.svg" width="48"> |
| `selenium` | <img src="./icons/Selenium.svg" width="48"> |
| `sentry` | <img src="./icons/Sentry.svg" width="48"> |
| `sequelize` | <img src="./icons/Sequelize-Light.svg" width="48"> |
| `siri` | <img src="./icons/Siri.svg" width="48"> |
| `sketchup` | <img src="./icons/Sketchup-Light.svg" width="48"> |
| `solidity` | <img src="./icons/Solidity.svg" width="48"> |
| `solidjs` | <img src="./icons/SolidJS-Light.svg" width="48"> |
| `spotify` | <img src="./icons/Spotify-Light.svg" width="48"> |
| `spring` | <img src="./icons/Spring-Light.svg" width="48"> |
| `sqlite` | <img src="./icons/SQLite.svg" width="48"> |
| `stackoverflow` | <img src="./icons/StackOverflow-Light.svg" width="48"> |
| `styledcomponents` | <img src="./icons/StyledComponents.svg" width="48"> |
| `sublime` | <img src="./icons/Sublime-Light.svg" width="48"> |
| `supabase` | <img src="./icons/Supabase-Light.svg" width="48"> |
| `svelte` | <img src="./icons/Svelte.svg" width="48"> |
| `svg` | <img src="./icons/SVG-Light.svg" width="48"> |
| `swift` | <img src="./icons/Swift.svg" width="48"> |
| `symfony` | <img src="./icons/Symfony-Light.svg" width="48"> |

<a id="icons-t"></a>
## T

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `tailwindcss` | <img src="./icons/TailwindCSS-Light.svg" width="48"> |
| `tauri` | <img src="./icons/Tauri-Light.svg" width="48"> |
| `tensorflow` | <img src="./icons/TensorFlow-Light.svg" width="48"> |
| `terraform` | <img src="./icons/Terraform-Light.svg" width="48"> |
| `threejs` | <img src="./icons/ThreeJS-Light.svg" width="48"> |
| `twitter` | <img src="./icons/Twitter.svg" width="48"> |
| `typescript` | <img src="./icons/TypeScript.svg" width="48"> |

<a id="icons-u"></a>
## U

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `ubuntu` | <img src="./icons/Ubuntu-Light.svg" width="48"> |
| `unity` | <img src="./icons/Unity-Light.svg" width="48"> |
| `unrealengine` | <img src="./icons/UnrealEngine.svg" width="48"> |

<a id="icons-v"></a>
## V

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `v` | <img src="./icons/V-Light.svg" width="48"> |
| `vala` | <img src="./icons/Vala.svg" width="48"> |
| `vercel` | <img src="./icons/Vercel-Light.svg" width="48"> |
| `verilog` | <img src="./icons/Verilog.svg" width="48"> |
| `vim` | <img src="./icons/VIM-Light.svg" width="48"> |
| `visualstudio` | <img src="./icons/VisualStudio-Light.svg" width="48"> |
| `vite` | <img src="./icons/Vite-Light.svg" width="48"> |
| `vitest` | <img src="./icons/Vitest-Light.svg" width="48"> |
| `vscode` | <img src="./icons/VSCode-Light.svg" width="48"> |
| `vscodium` | <img src="./icons/VSCodium-Light.svg" width="48"> |
| `vuejs` | <img src="./icons/VueJS-Light.svg" width="48"> |
| `vuetify` | <img src="./icons/Vuetify-Light.svg" width="48"> |

<a id="icons-w"></a>
## W

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `webassembly` | <img src="./icons/WebAssembly.svg" width="48"> |
| `webflow` | <img src="./icons/Webflow.svg" width="48"> |
| `webpack` | <img src="./icons/Webpack-Light.svg" width="48"> |
| `webstorm` | <img src="./icons/WebStorm-Light.svg" width="48"> |
| `windicss` | <img src="./icons/WindiCSS-Light.svg" width="48"> |
| `windows` | <img src="./icons/Windows-Light.svg" width="48"> |
| `wordpress` | <img src="./icons/Wordpress.svg" width="48"> |
| `workers` | <img src="./icons/Workers-Light.svg" width="48"> |

<a id="icons-x"></a>
## X

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `xd` | <img src="./icons/XD.svg" width="48"> |

<a id="icons-y"></a>
## Y

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `yarn` | <img src="./icons/Yarn-Light.svg" width="48"> |
| `yew` | <img src="./icons/Yew-Light.svg" width="48"> |

<a id="icons-z"></a>
## Z

[Back to top](#icons-jump)

|      Icon ID       |                         Icon                          |
| :----------------: | :---------------------------------------------------: |
| `zig` | <img src="./icons/Zig-Light.svg" width="48"> |
---

## 💖 Support the Original Creator

This fork is based on the original project by tandpfun. If you would like to support the original creator's open source work, you can buy them a coffee here:

<a href='https://ko-fi.com/Q5Q860KQ2' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

You can also support this fork by opening icon requests, reporting issues, or contributing improvements.
