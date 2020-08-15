# Bullet Points

video about crafting bullet points
- at the end of this program you'll be updating your resume
- will include info about your projects as well as previous work experience & education
- each project on resume should have a few bullet points highlighting your skills
- this video may seem premature but is definitely something you should revisit during 		   project week
- much better to think about bullet points while youre woprking on the project
- difficult to come back later and try to remember what you did 



# Getting CSS into HTML

1. link to stylesheet in HTML file
	 - should go in between <head> tags
	 - could be external or internal
	 - href is path to file 
	 - loaded top down


# Selectors

type selectors
- match by node name

class selectors
- match by class name

id selectors
- match by id 

unviersal selectors
- applies to all elements

attribute selectors
- match baseed on presence of value




compound class selectors
- spaces between class names are two separate classes
```
.blue.yellow
```
- applies to elements with both "blue" and "yellow" class
- no spaces in css file
```
.blue .yellow
```
- would apply to all .yellow elements insidee of a .blue element


one rule many selectors
- comma separated identifiers 



# Descendent selectors


child selector
- space between identifiers


direct child selector
- carrot selector selects nodes that are direct children


adjacent sibling selector
- sectione elements immediately preceded by h1 els


# Pseudo classes


specifies state of selected elements

element:hover
- applies when cursor is hovering over element


# Pseudo selectors

::after, ::before
- create pseudo-element as child of element property applies too



# specificity 

elements can be affected by more than one rule
- specifity rules determine which takes precidence if they contradict


when two rules apply
- browser combines all different properties and applies them 
- if two styles contradict, specifity determines which applies
- if speecifity is equal, rule that browser read last wins 


in increasing order of importance
- number of tag selectors
- number of class, pseudo-el, attrib-selectors
- number of id selectors
- inline styles (avoid)




# Imports

can import fonts from the web
- put @import statement at top of css file or directly in html



# Units


absolute units
- pt: small (not used as much)
- px: used a lot, how screen is measured


relative units
- em: relative to font size of containing element
- rem: relative to font size of root element



# colors, borders, shadows


colors
- can specify by name, by rgb
- color: text color
- background-color: background color