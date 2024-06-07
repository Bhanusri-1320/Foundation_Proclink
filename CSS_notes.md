git rebase -i HEAD~3

1. what is CSS?

# CSS_Cascading Style Sheets

## Types of CSS:

- Inline CSS- due to seperation of concern

  - Inline CSS, or inline style, is a technique for applying a unique style to a single HTML element within the body of a webpage using the style attribute:
  <p style=``font-family:courier; text-align:left;''>This actual text goes here.</p>
  <h1 style=``color: red; font-size: 40px;''>Hello World</h1>

- Internal Or Embedded CSS-coloring a heading with head tags
  - /\* <!DOCTYPE html>
  <html>

<head> 
	<title>Internal CSS</title> 
	<style> 
		/* Internal CSS */ 
    	p {
    		color: blue;
    		font-size: 25px;
    		line-height: 1.5;
    		text-align: center;
    	}
    </style>

</head>

<body>

    <p>A Computer Science Portal..!</p>

</body>

</html> */
  - saves time to request css file and get it

- External CSS --prefered one, we can link that file to other html files

  ![Types of CSS](image.png)

  ## CSS Terms

  ![CSS TERMS](image-1.png)

## Text Styling

1.  font-size
2.  font-weight --how thick you want the text to be
3.  font style --italic
4.  color --text color

### Color formats

1. name
2. rgb
3. HEX value-oldest -supports all
4. hsl(Hue, saturation, and lightness)--more human friendly
   - hue--color alone
   - saturation-- color poopoing up if saturation is high
   - lightness--adding white to the color
5. lch-not supported by rgb,better colors-have better color gamet-implemented 1st by safari
   srgb,dcpi,Adobe SRGB--other color gamut

## TextStyling -2

1. text transform--upper case,lower case
2. text-align
3. text decoration
4. letter-spacing-for brands like GUCCI
5. line-height->inversly proportional to font size

   - line height avoids rereading of lines

![code](image-2.png)

# Text Family

serif----for trust,tradational,serious,oldest,scured..(ex--paper,gold etc)
sans serif--- for other websites like tranding,chill etc

## Box Model:

> margin --
> border  
> padding --
> content
