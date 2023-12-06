# donations-thermometer

Using **Vite** and **Lit**, I created a fundraising thermometer as a web component. When I worked in non-profits, this web component would have come in handy!

You can run this project by running either `npm run dev` or `npm run build`.

**Note** The styling for the fundraising thermometer is adapted from this code pen: https://codepen.io/TommyCreenan/pen/naxVYV

This web component is for educational purposes only.

**The Donations Thermometer component renders a graphical representation of a donation thermometer based on the amount you are trying to raise, and the amount you have made towards your goal so far.
If you have raised under 50% to your goal, the progression bar is red. If you are between 50-90% of your target, it's orange and if you are over 90% it's green.**



To use the component, you need to import the download the script and add it to your project, then import using:
`script type="module" src="src/DonationThermometer.js"></script>` before the closing body tag of your index.html.

## Props
- goal :number = fundraising goal
- raised :number = amount raised so far
- fullStats :boolean = if you want to show summary of the amount raised/goal.
The slot allows you to pass in a campaign name as an h1 tag.

There are currently defaults applied for property clarity.

**Example**
```html
<donation-thermometer fullStats="True" goal="2000" amountAchieved="100">
<h1>Campaign Name</h1>
    </donation-thermometer>
```

## Screenshots
![Screenshot 2023-12-04 at 3 35 00 PM](https://github.com/euripidean/fundraising-thermometer/assets/33559193/06484438-4eb3-4632-9418-e35239b92493)
![Screenshot 2023-12-04 at 3 35 19 PM](https://github.com/euripidean/fundraising-thermometer/assets/33559193/35629163-07c6-4dbb-bd6f-df3d5c088d6f)
![Screenshot 2023-12-04 at 3 35 31 PM](https://github.com/euripidean/fundraising-thermometer/assets/33559193/81887f02-2326-4cfa-9ea6-ab028ad0c3c8)
![Screenshot 2023-12-04 at 3 35 38 PM](https://github.com/euripidean/fundraising-thermometer/assets/33559193/9366bcc8-1c33-4c6e-b7d2-dd76e1c8c872)
