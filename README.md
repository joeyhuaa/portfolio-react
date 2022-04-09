# MY BOOK OF STORIES

.
├── LICENSE
├── README.md
├── api
│   ├── db
│   │   ├── dev.db
│   │   ├── migrations
│   │   │   ├── 20220409033623_initial_schema
│   │   │   │   └── migration.sql
│   │   │   └── migration_lock.toml
│   │   └── schema.prisma
│   ├── dist
│   │   ├── directives
│   │   │   ├── requireAuth
│   │   │   │   ├── requireAuth.js
│   │   │   │   └── requireAuth.js.map
│   │   │   └── skipAuth
│   │   │       ├── skipAuth.js
│   │   │       └── skipAuth.js.map
│   │   ├── functions
│   │   │   ├── auth.js
│   │   │   ├── auth.js.map
│   │   │   ├── graphql.js
│   │   │   └── graphql.js.map
│   │   ├── graphql
│   │   │   ├── contacts.sdl.js
│   │   │   ├── contacts.sdl.js.map
│   │   │   ├── posts.sdl.js
│   │   │   ├── posts.sdl.js.map
│   │   │   ├── users.sdl.js
│   │   │   └── users.sdl.js.map
│   │   ├── lib
│   │   │   ├── auth.js
│   │   │   ├── auth.js.map
│   │   │   ├── db.js
│   │   │   ├── db.js.map
│   │   │   ├── logger.js
│   │   │   └── logger.js.map
│   │   └── services
│   │       ├── contacts
│   │       │   ├── contacts.js
│   │       │   └── contacts.js.map
│   │       ├── posts
│   │       │   ├── posts.js
│   │       │   └── posts.js.map
│   │       └── users
│   │           ├── users.js
│   │           └── users.js.map
│   ├── jest.config.js
│   ├── jsconfig.json
│   ├── node_modules
│   ├── package.json
│   ├── src
│   │   ├── directives
│   │   │   ├── requireAuth
│   │   │   │   ├── requireAuth.js
│   │   │   │   └── requireAuth.test.js
│   │   │   └── skipAuth
│   │   │       ├── skipAuth.js
│   │   │       └── skipAuth.test.js
│   │   ├── functions
│   │   │   ├── auth.js
│   │   │   └── graphql.js
│   │   ├── graphql
│   │   │   ├── contacts.sdl.js
│   │   │   ├── posts.sdl.js
│   │   │   └── users.sdl.js
│   │   ├── lib
│   │   │   ├── auth.js
│   │   │   ├── db.js
│   │   │   └── logger.js
│   │   └── services
│   │       ├── contacts
│   │       │   ├── contacts.js
│   │       │   ├── contacts.scenarios.js
│   │       │   └── contacts.test.js
│   │       ├── posts
│   │       │   ├── posts.js
│   │       │   ├── posts.scenarios.js
│   │       │   └── posts.test.js
│   │       └── users
│   │           ├── users.js
│   │           ├── users.scenarios.js
│   │           └── users.test.js
│   └── types
├── graphql.config.js
├── jest.config.js
├── netlify.toml
├── package.json
├── prettier.config.js
├── redwood.toml
├── scripts
│   └── seed.js
├── web
│   ├── config
│   │   ├── postcss.config.js
│   │   └── tailwind.config.js
│   ├── jest.config.js
│   ├── jsconfig.json
│   ├── node_modules
│   ├── package.json
│   ├── public
│   │   ├── README.md
│   │   ├── favicon.png
│   │   └── robots.txt
│   ├── src
│   │   ├── App.js
│   │   ├── Routes.js
│   │   ├── components
│   │   │   ├── Article
│   │   │   │   ├── Article.js
│   │   │   │   ├── Article.stories.js
│   │   │   │   └── Article.test.js
│   │   │   ├── ArticleCell
│   │   │   │   ├── ArticleCell.js
│   │   │   │   ├── ArticleCell.mock.js
│   │   │   │   ├── ArticleCell.stories.js
│   │   │   │   └── ArticleCell.test.js
│   │   │   ├── ArticlesCell
│   │   │   │   ├── ArticlesCell.js
│   │   │   │   ├── ArticlesCell.mock.js
│   │   │   │   ├── ArticlesCell.stories.js
│   │   │   │   └── ArticlesCell.test.js
│   │   │   ├── Comment
│   │   │   │   ├── Comment.js
│   │   │   │   ├── Comment.stories.js
│   │   │   │   └── Comment.test.js
│   │   │   ├── CommentsCell
│   │   │   │   ├── CommentsCell.js
│   │   │   │   ├── CommentsCell.mock.js
│   │   │   │   ├── CommentsCell.stories.js
│   │   │   │   └── CommentsCell.test.js
│   │   │   └── Post
│   │   │       ├── EditPostCell
│   │   │       │   └── EditPostCell.js
│   │   │       ├── NewPost
│   │   │       │   └── NewPost.js
│   │   │       ├── Post
│   │   │       │   └── Post.js
│   │   │       ├── PostCell
│   │   │       │   └── PostCell.js
│   │   │       ├── PostForm
│   │   │       │   └── PostForm.js
│   │   │       ├── Posts
│   │   │       │   └── Posts.js
│   │   │       └── PostsCell
│   │   │           └── PostsCell.js
│   │   ├── index.css
│   │   ├── index.html
│   │   ├── layouts
│   │   │   ├── BlogLayout
│   │   │   │   ├── BlogLayout.js
│   │   │   │   ├── BlogLayout.stories.js
│   │   │   │   └── BlogLayout.test.js
│   │   │   └── PostsLayout
│   │   │       └── PostsLayout.js
│   │   ├── pages
│   │   │   ├── AboutPage
│   │   │   │   ├── AboutPage.js
│   │   │   │   ├── AboutPage.stories.js
│   │   │   │   └── AboutPage.test.js
│   │   │   ├── ArticlePage
│   │   │   │   ├── ArticlePage.js
│   │   │   │   ├── ArticlePage.stories.js
│   │   │   │   └── ArticlePage.test.js
│   │   │   ├── ContactPage
│   │   │   │   ├── ContactPage.js
│   │   │   │   ├── ContactPage.stories.js
│   │   │   │   └── ContactPage.test.js
│   │   │   ├── FatalErrorPage
│   │   │   │   └── FatalErrorPage.js
│   │   │   ├── ForgotPasswordPage
│   │   │   │   └── ForgotPasswordPage.js
│   │   │   ├── HomePage
│   │   │   │   ├── HomePage.js
│   │   │   │   ├── HomePage.stories.js
│   │   │   │   └── HomePage.test.js
│   │   │   ├── LoginPage
│   │   │   │   └── LoginPage.js
│   │   │   ├── NotFoundPage
│   │   │   │   └── NotFoundPage.js
│   │   │   ├── Post
│   │   │   │   ├── EditPostPage
│   │   │   │   │   └── EditPostPage.js
│   │   │   │   ├── NewPostPage
│   │   │   │   │   └── NewPostPage.js
│   │   │   │   ├── PostPage
│   │   │   │   │   └── PostPage.js
│   │   │   │   └── PostsPage
│   │   │   │       └── PostsPage.js
│   │   │   ├── ResetPasswordPage
│   │   │   │   └── ResetPasswordPage.js
│   │   │   └── SignupPage
│   │   │       └── SignupPage.js
│   │   └── scaffold.css
│   └── types
└── yarn.lock
