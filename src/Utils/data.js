export const code = [
    {
        content: "@@ -5,14 +5,15 @@"
    },
    {
        content :'     "database/sql"',
        lineNumber: 5,
        nextLine: 5
    },
    {
        content : 	'    "github.com/keegancsmith/sqlf"',
        lineNumber: 6,
        nextLine: 6

    },
    {
        content : '     "github.com/keegancsmith/sqlf2"',
        remove: true,
        lineNumber: 7,
        nextLine: ""


    },
    {
        content : '      "github.com/sourcegraph/sourcegraph/internal/db/basestore"',
        add: true,
        lineNumber: "",
        nextLine: 7


    
    },
    {
        content : "// scanUploadMeta scans upload metadata grouped by commit from the return value of '*store.query'.",
        lineNumber: 8,
        nextLine: 8


    },
    {
        content : "",
        lineNumber: 9,
        nextLine: 9


    },
    {
        content : " func scanUploadMeta(rows *sql.Rows, queryErr error) (_ map[string][]UploadMeta, err error) {",
        lineNumber: 10,
        nextLine: 10


    },
    {
        content : "   if queryErr != nil {",
        remove: true,
        lineNumber: 11,
        nextLine: ""


    },
    {
        content : "     return nil, queryErr`}",
        add: true,
        lineNumber: "",
        nextLine: 11


    },
    {
        content : "@@ -5,14 +5,15 @@ import (",

    },
    {
        content : "// scanIndexes scans a slice of indexes from the return value of `*store.query`.",
        lineNumber: 37,
        nextLine: 37


    },
    {
        content : "func scanIndexes(rows *sql.Rows, queryErr error) (_ []Index, err error) {",
        lineNumber: 38,
        nextLine: 38

    },
    {
        content : "   if queriErr != nil {",
        lineNumber: 39,
        nextLine: 39,
        remove: true

    },
    {
        content : "   if qerror != nil {",       
         lineNumber: " ",
         nextLine: 39,
         add: true

    },
    {
        content : "     return nil, queryErr",
        lineNumber: 40,
        nextLine: 40


    },
    {
        content: " }",
        lineNumber: 41,
        nextLine: 41

    },
    {
        content: " defer func() { err = basestore.CloseRows(rows, err) }()",
        lineNumber: 42,
        nextLine: 42

    },
    {
        content: "   var indexes []Index",
        lineNumber: 43,
        nextLine: 43

    },
     {
        content: " for rows.Next() {",
        lineNumber: 44,
        nextLine: 44

    },
    {
        content: "  var index Index",
        lineNumber: 45,
        nextLine: 45
    }
]

export const object = {
    owner: "monikavermaa",
    repository: "test_assesment",
    commit_sha: "bff31d77dc2b550765476a7fd3117aeb3ddb1a05",
    author: "Monika Verma",
    message: "remove unused things, added seeds entry also added readme file for installation",
    files: [
      [
        "README.md",
        [
          "@@ -6,19 +6,21 @@ application up and running.",
          " Things you may want to cover:",
          " ",
          " * Ruby version",
          "+  ruby-2.6.3 ",
          " ",
          "-* System dependencies",
          "+* Installation ",
          " ",
          "-* Configuration",
          "+  git clone \"the project\"",
          " ",
          "-* Database creation",
          "+  run bundle install ",
          " ",
          "-* Database initialization",
          "+* Database creation",
          " ",
          "-* How to run the test suite",
          "+  rake db:create  # for create database",
          "+  rake db:migrate # for migrate database",
          " ",
          "-* Services (job queues, cache servers, search engines, etc.)",
          "+  rake db:seed # for seed the data",
          " ",
          "-* Deployment instructions",
          "+* How to run the test suite",
          " ",
          "-* ...",
          "+  rspec # for run the test cases"
        ]
      ],
      [
        "app/channels/application_cable/channel.rb",
        [
          "@@ -1,4 +0,0 @@",
          "-module ApplicationCable",
          "-  class Channel < ActionCable::Channel::Base",
          "-  end",
          "-end"
        ]
      ],
      [
        "app/channels/application_cable/connection.rb",
        [
          "@@ -1,4 +0,0 @@",
          "-module ApplicationCable",
          "-  class Connection < ActionCable::Connection::Base",
          "-  end",
          "-end"
        ]
      ],
      [
        "app/jobs/application_job.rb",
        [
          "@@ -1,7 +0,0 @@",
          "-class ApplicationJob < ActiveJob::Base",
          "-  # Automatically retry jobs that encountered a deadlock",
          "-  # retry_on ActiveRecord::Deadlocked",
          "-",
          "-  # Most jobs are safe to ignore if the underlying records are no longer available",
          "-  # discard_on ActiveJob::DeserializationError",
          "-end"
        ]
      ],
      [
        "app/mailers/application_mailer.rb",
        [
          "@@ -1,4 +0,0 @@",
          "-class ApplicationMailer < ActionMailer::Base",
          "-  default from: 'from@example.com'",
          "-  layout 'mailer'",
          "-end"
        ]
      ],
      [
        "app/models/concerns/.keep",
        []
      ],
      [
        "db/seeds.rb",
        [
          "@@ -1,7 +1,13 @@",
          " # This file should contain all the record creation needed to seed the database with its default values.",
          " # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).",
          "-#",
          "-# Examples:",
          "-#",
          "-#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])",
          "-#   Character.create(name: 'Luke', movie: movies.first)",
          "+",
          "+# create tree from here",
          "+@tree = Tree.first_or_create",
          "+",
          "+#create main node root as per the assignment",
          "+@node = Node.create(label: \"root\", tree_id: @tree.id)",
          "+",
          "+# create nested nodes with parent node root",
          "+@node_ant = Node.create(label: \"ant\", tree_id: @tree.id, parent_id: @node.id)",
          "+@node_bear = Node.create(label: \"bear\", tree_id: @tree.id, parent_id: @node.id)",
          "+@node_frog = Node.create(label: \"frog\", tree_id: @tree.id, parent_id: @node.id)"
        ]
      ],
      [
        "lib/assets/.keep",
        []
      ],
      [
        "lib/tasks/.keep",
        []
      ]
    ]
  }

 
 
            
           
           
    
         
           
                 