**********Deploy a Website**********

***Create a static website using jekyll***

Jekyll is a Ruby gem

Installing Jekyll: in command line 
-> gem install jekyll

Generate a static code: in command line
-> jekyll new my-portfolio-site
"my-portfolio-site" is the directory name and "new" is the command to create new website

View site locally: on command line
-> jekyll serve
This command start a local server that will serve the files to your computer.
By default, the address of the local server starts is http://localhost:4000/

Jekyll's Directory Structure:
1. _config.yml - This is a configuration file that contains many values that need to be edited only once. To know about yml: http://www.yaml.org/start.html
2. _includes/ - This directory contains all the partials that your site uses to load common components, like the header and the footer.
3. _posts/ - This directory is where blog posts are stored.
4. _layouts/ - This directory contains templates that are used to style certain types of posts within the site.


***Deploy Your Website to GitHub Pages***

Sign up for GitHub at: https://github.com/

Create your repo: The repo's must be of format
your-user-name.github.io

Initialize your repo in local:
-> git init

Add the Remote:
We will have to add the remote and label it as the origin. The origin is the alias for remote.
-> git remote add origin https://github.com/your-user-name/your-user-name.github.io.git

Remove the remote with the following command:
-> git remote rm origin

Command to list all the Git remotes and their corresponding URLs:
-> git remote -v

Add all site's content using command:
-> git add .

Save changes using git command:
-> git commit -m "Save my work"

Push the content to repo using command:
-> git push -u origin master

The URL for your GitHub Pages site is: 
your-user-name.github.io


***Assign a Custom Domain Name to Your Website***

Domain name
Domain names are human-friendly names that identify servers on the Internet.
A global system known as the Domain Name System (DNS) is used for storing which domain names correspond to which servers.

We can use Amazon Web Services (AWS) to purchase custome domain name.
https://aws.amazon.com/
The specific service we're going to use to purchase your domain name is called Route 53.

"Route 53," under the "Networking" category.
Route 53 can be used to purchase domain names and create DNS records.

Go Route 53 under Networking and click on Get started Now button for Domain Registration. 
Click Register Domain.

Setting Up Your Custom Domain:
1. Inform GitHub of the new domain name we'll be using
The new CNAME file in your repo informs GitHub that you're assigning a new custom domain name to your GitHub Pages site.
create new file CNAME in your repo your-user-name.github.io and write yourcustomdomain.com inside the file.
In settings search for Your site is published at http://yourcustomdomain.com.

2. Creating DNS records, which are globally accessible records that map domain names to servers.
The DNS records are created inside of a Hosted Zone in Route 53. A Hosted Zone is essentially a group of DNS records for a single domain.
In Route 53. Click on the title that says "Hosted Zones." Click on it to open it.

Confirm NS Record:

Create an A record:
IP address of GitHub
192.30.252.153
192.30.252.154

Create a CNAME record:

In Route 53, your domain name's Hosted Zone contains the following:
The NS (Name Server) record for your domain name. When a domain name is typed into a browser, the DNS looks to these name servers to help direct the request.
The A (or Alias) record. This record is used to direct requests of your domain name to GitHub's servers using their IP addresses.
The CNAME (or Canonical name) record. This record specifies what custom domain will point to your true (canonical) domain.

Confirm the Custom Domain:
We can use the dig command in the terminal to look up your domain name and make sure that the CNAME and A records were properly set.
The dig (domain information groper) command is a DNS lookup utility.




