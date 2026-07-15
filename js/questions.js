/* NMTC Prep — practice question bank.
   Levels follow the NMTC contest structure:
   primary  = Primary (Gauss contest, Std V–VI)
   subjr    = Sub-Junior (Kaprekar contest, Std VII–VIII)
   junior   = Junior (Bhaskara contest, Std IX–X)
   inter    = Inter (Ramanujan contest, Std XI–XII)
   `answer` is the index of the correct entry in `options`.
   `diff` is one of "easy" | "medium" | "hard". */

const LEVELS = {
    primary: { name: "Primary (Gauss)", classes: "Std V–VI", icon: "🌱" },
    subjr: { name: "Sub-Junior (Kaprekar)", classes: "Std VII–VIII", icon: "🌿" },
    junior: { name: "Junior (Bhaskara)", classes: "Std IX–X", icon: "🌳" },
    inter: { name: "Inter (Ramanujan)", classes: "Std XI–XII", icon: "🏔️" }
};

const QUESTIONS = [
    /* ================= PRIMARY (Gauss, Std V–VI) ================= */
    {
        level: "primary", topic: "Arithmetic", diff: "easy",
        q: "What is the sum 1 + 2 + 3 + … + 100?",
        options: ["5000", "5050", "5100", "4950"],
        answer: 1,
        solution: "Pair the numbers: (1+100), (2+99), … gives 50 pairs, each summing to 101. So the total is 50 × 101 = 5050."
    },
    {
        level: "primary", topic: "Number Sense", diff: "medium",
        q: "A number leaves remainder 5 when divided by 9. What remainder does twice that number leave when divided by 9?",
        options: ["0", "5", "1", "2"],
        answer: 2,
        solution: "Twice the number leaves remainder 2 × 5 = 10, and 10 divided by 9 leaves remainder 1."
    },
    {
        level: "primary", topic: "Patterns", diff: "easy",
        q: "Find the next term of the sequence 2, 6, 12, 20, 30, …",
        options: ["40", "36", "42", "44"],
        answer: 2,
        solution: "The differences are 4, 6, 8, 10, … increasing by 2 each time. The next difference is 12, so the next term is 30 + 12 = 42. (Each term is n × (n+1).)"
    },
    {
        level: "primary", topic: "Number Sense", diff: "easy",
        q: "How many two-digit numbers have digits that add up to 9?",
        options: ["8", "9", "10", "11"],
        answer: 1,
        solution: "They are 18, 27, 36, 45, 54, 63, 72, 81 and 90 — nine numbers in all."
    },
    {
        level: "primary", topic: "Geometry", diff: "easy",
        q: "What is the angle between the hour hand and the minute hand of a clock at exactly 3 o'clock?",
        options: ["60°", "90°", "120°", "45°"],
        answer: 1,
        solution: "At 3:00 the minute hand points at 12 and the hour hand at 3. That is 3 of the 12 hour-marks apart: 3 × 30° = 90°."
    },
    {
        level: "primary", topic: "Geometry", diff: "easy",
        q: "A rectangle has perimeter 36 cm and length 10 cm. What is its area?",
        options: ["80 cm²", "60 cm²", "90 cm²", "100 cm²"],
        answer: 0,
        solution: "Length + width = 36 ÷ 2 = 18, so the width is 18 − 10 = 8 cm. Area = 10 × 8 = 80 cm²."
    },
    {
        level: "primary", topic: "Puzzles", diff: "easy",
        q: "If ▲ + ▲ + ▲ = 27 and ▲ + ● = 14, what is the value of ●?",
        options: ["5", "6", "9", "4"],
        answer: 0,
        solution: "From the first equation ▲ = 27 ÷ 3 = 9. Then ● = 14 − 9 = 5."
    },
    {
        level: "primary", topic: "Number Sense", diff: "easy",
        q: "What is the smallest number that is divisible by both 12 and 18?",
        options: ["24", "54", "36", "72"],
        answer: 2,
        solution: "We need the LCM. 12 = 2×2×3 and 18 = 2×3×3, so LCM = 2×2×3×3 = 36."
    },
    {
        level: "primary", topic: "Puzzles", diff: "easy",
        q: "The ages of a father and son add up to 50 years, and the father is four times as old as the son. How old is the son?",
        options: ["8", "12", "10", "15"],
        answer: 2,
        solution: "If the son is x years old, the father is 4x, so x + 4x = 50 gives 5x = 50 and x = 10."
    },
    {
        level: "primary", topic: "Counting", diff: "medium",
        q: "How many squares (of all sizes) are there on a 3 × 3 grid of unit squares?",
        options: ["9", "13", "14", "15"],
        answer: 2,
        solution: "There are 9 small 1×1 squares, 4 squares of size 2×2, and 1 square of size 3×3: 9 + 4 + 1 = 14."
    },
    {
        level: "primary", topic: "Arithmetic", diff: "medium",
        q: "What is the value of 100 − 99 + 98 − 97 + … + 2 − 1?",
        options: ["49", "50", "51", "100"],
        answer: 1,
        solution: "Group in pairs: (100−99) + (98−97) + … + (2−1). There are 50 pairs, each equal to 1, so the sum is 50."
    },
    {
        level: "primary", topic: "Counting", diff: "medium",
        q: "A book has pages numbered 1 to 100. How many times does the digit 7 appear in the page numbers?",
        options: ["10", "11", "19", "20"],
        answer: 3,
        solution: "The digit 7 appears 10 times in the units place (7, 17, …, 97) and 10 times in the tens place (70–79). Total = 20. (Note 77 contributes twice.)"
    },
    {
        level: "primary", topic: "Puzzles", diff: "medium",
        q: "A snail climbs 3 m up a wall each day but slips down 2 m each night. The wall is 10 m high. On which day does it reach the top?",
        options: ["10th", "9th", "8th", "7th"],
        answer: 2,
        solution: "Each full day-and-night it gains 1 m, so after 7 nights it is at 7 m. On the 8th day it climbs 3 m and reaches 10 m — before slipping back. Day 8."
    },
    {
        level: "primary", topic: "Geometry", diff: "easy",
        q: "Two angles of a triangle are 65° and 45°. What is the third angle?",
        options: ["60°", "70°", "80°", "75°"],
        answer: 1,
        solution: "The angles of a triangle add to 180°: the third angle is 180° − 65° − 45° = 70°."
    },
    {
        level: "primary", topic: "Counting", diff: "easy",
        q: "How many three-digit numbers are there in all?",
        options: ["899", "900", "999", "1000"],
        answer: 1,
        solution: "Three-digit numbers run from 100 to 999: that is 999 − 100 + 1 = 900 numbers."
    },
    {
        level: "primary", topic: "Puzzles", diff: "medium",
        q: "If today is Wednesday, what day of the week will it be 100 days from now?",
        options: ["Thursday", "Friday", "Saturday", "Monday"],
        answer: 1,
        solution: "Every 7 days the weekday repeats. 100 = 7 × 14 + 2, so 100 days from Wednesday is 2 weekdays later: Friday."
    },
    {
        level: "primary", topic: "Puzzles", diff: "hard",
        q: "A clock takes 5 seconds to strike 6 o'clock (6 strikes). How long does it take to strike 12 o'clock?",
        options: ["10 seconds", "11 seconds", "12 seconds", "9 seconds"],
        answer: 1,
        solution: "6 strikes have 5 gaps between them, so each gap is 1 second. 12 strikes have 11 gaps: 11 seconds. The time is in the gaps, not the strikes!"
    },
    {
        level: "primary", topic: "Arithmetic", diff: "medium",
        q: "Half of a number is 16 more than a quarter of the same number. What is the number?",
        options: ["32", "48", "64", "80"],
        answer: 2,
        solution: "x/2 − x/4 = 16 means x/4 = 16, so x = 64. Check: half is 32, a quarter is 16, and 32 − 16 = 16. ✓"
    },
    {
        level: "primary", topic: "Counting", diff: "easy",
        q: "How many even numbers are there from 1 to 100?",
        options: ["49", "50", "51", "99"],
        answer: 1,
        solution: "The even numbers are 2, 4, 6, …, 100 — one for every pair, so 100 ÷ 2 = 50 of them."
    },
    {
        level: "primary", topic: "Geometry", diff: "easy",
        q: "A square has area 64 cm². What is its perimeter?",
        options: ["16 cm", "24 cm", "32 cm", "64 cm"],
        answer: 2,
        solution: "The side is √64 = 8 cm, so the perimeter is 4 × 8 = 32 cm."
    },
    {
        level: "primary", topic: "Number Sense", diff: "hard",
        q: "The digits of a two-digit number add up to 11. Reversing the digits gives a number that is 27 more. What is the original number?",
        options: ["38", "47", "56", "29"],
        answer: 1,
        solution: "Reversing changes the number by 9 × (difference of digits). So the digits differ by 27 ÷ 9 = 3 and add to 11: they are 4 and 7. The smaller arrangement is 47 (since reversing must increase it): 74 − 47 = 27. ✓"
    },
    {
        level: "primary", topic: "Puzzles", diff: "easy",
        q: "Ram has twice as many marbles as Shyam. Together they have 36 marbles. How many does Ram have?",
        options: ["12", "18", "24", "27"],
        answer: 2,
        solution: "Shyam has x and Ram has 2x, so 3x = 36 and x = 12. Ram has 2 × 12 = 24 marbles."
    },
    {
        level: "primary", topic: "Arithmetic", diff: "easy",
        q: "The sum of three consecutive numbers is 72. What is the largest of them?",
        options: ["23", "24", "25", "26"],
        answer: 2,
        solution: "The middle number is 72 ÷ 3 = 24, so the numbers are 23, 24, 25. The largest is 25."
    },
    {
        level: "primary", topic: "Patterns", diff: "medium",
        q: "Look at the pattern: 1×8+1 = 9, 12×8+2 = 98, 123×8+3 = 987. What is 1234×8+4?",
        options: ["9876", "9867", "9786", "8976"],
        answer: 0,
        solution: "The pattern continues: each line appends the next digit and the answer counts down from 9. So 1234 × 8 + 4 = 9876. (Check: 1234 × 8 = 9872, plus 4 is 9876.)"
    },
    {
        level: "primary", topic: "Puzzles", diff: "hard",
        q: "How many times do the hour and minute hands of a clock point in exactly the same direction between 12 noon and 12 midnight?",
        options: ["10", "11", "12", "22"],
        answer: 1,
        solution: "The minute hand laps the hour hand once every 12/11 hours, so in 12 hours they coincide 11 times (the 12 o'clock moments at both ends count once)."
    },

    /* ================= SUB-JUNIOR (Kaprekar, Std VII–VIII) ================= */
    {
        level: "subjr", topic: "Number Theory", diff: "medium",
        q: "What is the units digit of 7<sup>2026</sup>?",
        options: ["7", "9", "3", "1"],
        answer: 1,
        solution: "Units digits of powers of 7 cycle: 7, 9, 3, 1 with period 4. Since 2026 = 4×506 + 2, the units digit matches 7², which is 9."
    },
    {
        level: "subjr", topic: "Algebra", diff: "medium",
        q: "If x + 1/x = 3, what is the value of x² + 1/x²?",
        options: ["6", "9", "7", "11"],
        answer: 2,
        solution: "Square both sides: (x + 1/x)² = x² + 2 + 1/x² = 9, so x² + 1/x² = 9 − 2 = 7."
    },
    {
        level: "subjr", topic: "Geometry", diff: "easy",
        q: "What is the sum of the interior angles of a hexagon?",
        options: ["540°", "720°", "900°", "1080°"],
        answer: 1,
        solution: "For an n-sided polygon the sum is (n − 2) × 180°. For n = 6: 4 × 180° = 720°."
    },
    {
        level: "subjr", topic: "Number Theory", diff: "medium",
        q: "How many two-digit prime numbers have both digits prime?",
        options: ["3", "4", "5", "6"],
        answer: 1,
        solution: "The digits must come from {2, 3, 5, 7}. A prime can't end in 2 or 5, so check numbers ending in 3 or 7: 23, 33, 53, 73, 27, 37, 57, 77. The primes among them are 23, 37, 53 and 73 — four numbers."
    },
    {
        level: "subjr", topic: "Averages", diff: "easy",
        q: "What is the average of the first 20 odd numbers?",
        options: ["19", "20", "21", "40"],
        answer: 1,
        solution: "The sum of the first n odd numbers is n², so the sum is 20² = 400 and the average is 400 ÷ 20 = 20."
    },
    {
        level: "subjr", topic: "Number Theory", diff: "medium",
        q: "Find the smallest positive number that leaves remainder 3 when divided by 5, and remainder 4 when divided by 7.",
        options: ["18", "23", "33", "38"],
        answer: 0,
        solution: "Numbers leaving remainder 4 on division by 7: 4, 11, 18, 25, … Among these, 18 leaves remainder 3 when divided by 5 (18 = 3×5 + 3)."
    },
    {
        level: "subjr", topic: "Ratio", diff: "medium",
        q: "If a : b = 2 : 3 and b : c = 4 : 5, then a : b : c equals",
        options: ["2 : 3 : 5", "8 : 12 : 15", "6 : 8 : 10", "4 : 6 : 5"],
        answer: 1,
        solution: "Make the b values match: a : b = 8 : 12 and b : c = 12 : 15. So a : b : c = 8 : 12 : 15."
    },
    {
        level: "subjr", topic: "Percentages", diff: "easy",
        q: "The price of an item is increased by 20% and then decreased by 20%. The net change in price is",
        options: ["no change", "4% increase", "4% decrease", "2% decrease"],
        answer: 2,
        solution: "The final price is 1.2 × 0.8 = 0.96 of the original — a 4% decrease."
    },
    {
        level: "subjr", topic: "Geometry", diff: "easy",
        q: "In an isosceles triangle the vertex angle is 40°. Each base angle measures",
        options: ["40°", "60°", "70°", "80°"],
        answer: 2,
        solution: "The base angles are equal and all three angles sum to 180°: each base angle = (180° − 40°) ÷ 2 = 70°."
    },
    {
        level: "subjr", topic: "Counting", diff: "medium",
        q: "How many diagonals does a decagon (10-sided polygon) have?",
        options: ["30", "35", "40", "45"],
        answer: 1,
        solution: "Each of the 10 vertices connects to 7 non-adjacent vertices, and each diagonal is counted twice: 10 × 7 ÷ 2 = 35."
    },
    {
        level: "subjr", topic: "Exponents", diff: "easy",
        q: "Simplify: (2<sup>10</sup> × 2<sup>6</sup>) ÷ 2<sup>12</sup>",
        options: ["4", "8", "16", "32"],
        answer: 2,
        solution: "Add exponents when multiplying and subtract when dividing: 2^(10+6−12) = 2⁴ = 16."
    },
    {
        level: "subjr", topic: "Number Theory", diff: "hard",
        q: "In how many zeros does 25! (the product 1 × 2 × 3 × … × 25) end?",
        options: ["5", "6", "7", "10"],
        answer: 1,
        solution: "Trailing zeros come from factors of 5 (there are plenty of 2s). Multiples of 5 up to 25 give ⌊25/5⌋ = 5 fives, and 25 = 5² gives one extra: total 6."
    },
    {
        level: "subjr", topic: "Number Theory", diff: "medium",
        q: "What is the smallest perfect square that is divisible by 12?",
        options: ["24", "36", "48", "144"],
        answer: 1,
        solution: "12 = 2² × 3, so a square multiple needs every prime to an even power: 2² × 3² = 36 works, and nothing smaller does."
    },
    {
        level: "subjr", topic: "Exponents", diff: "easy",
        q: "If 3<sup>x</sup> = 81, then x equals",
        options: ["3", "4", "5", "27"],
        answer: 1,
        solution: "81 = 3 × 3 × 3 × 3 = 3⁴, so x = 4."
    },
    {
        level: "subjr", topic: "Algebra", diff: "easy",
        q: "The sum 1 + 2 + 3 + … + n equals 210. What is n?",
        options: ["19", "20", "21", "22"],
        answer: 1,
        solution: "n(n+1)/2 = 210 means n(n+1) = 420 = 20 × 21, so n = 20."
    },
    {
        level: "subjr", topic: "Geometry", diff: "easy",
        q: "The angles of a quadrilateral are in the ratio 1 : 2 : 3 : 4. What is the largest angle?",
        options: ["120°", "135°", "144°", "150°"],
        answer: 2,
        solution: "The angles sum to 360°, and 1+2+3+4 = 10 parts, so one part is 36°. The largest angle is 4 × 36° = 144°."
    },
    {
        level: "subjr", topic: "Counting", diff: "easy",
        q: "How many numbers from 1 to 100 are divisible by both 3 and 4?",
        options: ["7", "8", "9", "12"],
        answer: 1,
        solution: "Divisible by both 3 and 4 means divisible by 12: the numbers 12, 24, …, 96 — that is ⌊100/12⌋ = 8 numbers."
    },
    {
        level: "subjr", topic: "Number Theory", diff: "hard",
        q: "How many two-digit numbers are equal to 7 times the sum of their digits?",
        options: ["2", "3", "4", "5"],
        answer: 2,
        solution: "10a + b = 7(a + b) gives 3a = 6b, i.e. a = 2b. So (a,b) = (2,1), (4,2), (6,3), (8,4): the numbers 21, 42, 63, 84 — four of them."
    },
    {
        level: "subjr", topic: "Exponents", diff: "easy",
        q: "What is the value of √(49 × 36)?",
        options: ["36", "40", "42", "84"],
        answer: 2,
        solution: "√(49 × 36) = √49 × √36 = 7 × 6 = 42."
    },
    {
        level: "subjr", topic: "Word Problems", diff: "easy",
        q: "A cyclist covers 60 km in 45 minutes. What is the speed in km per hour?",
        options: ["70 km/h", "75 km/h", "80 km/h", "90 km/h"],
        answer: 2,
        solution: "45 minutes is ¾ of an hour, so the speed is 60 ÷ (3/4) = 80 km/h."
    },
    {
        level: "subjr", topic: "Percentages", diff: "easy",
        q: "If 40% of a number is 56, what is the number?",
        options: ["120", "130", "140", "160"],
        answer: 2,
        solution: "The number is 56 ÷ 0.40 = 140. Check: 40% of 140 = 56. ✓"
    },
    {
        level: "subjr", topic: "Number Theory", diff: "medium",
        q: "What is the units digit of 3⁴ + 4³?",
        options: ["1", "3", "5", "7"],
        answer: 2,
        solution: "3⁴ = 81 and 4³ = 64, so the sum is 145, whose units digit is 5."
    },
    {
        level: "subjr", topic: "Counting", diff: "medium",
        q: "A 3-cm cube is painted on all faces and cut into 1-cm cubes. How many small cubes have paint on exactly one face?",
        options: ["6", "8", "12", "9"],
        answer: 0,
        solution: "The one-face cubes are the centres of each face. A 3×3×3 cube has one centre cube per face, and 6 faces: 6 cubes."
    },
    {
        level: "subjr", topic: "Puzzles", diff: "medium",
        q: "A drawer has 10 blue socks and 10 black socks, all mixed up. Picking in the dark, how many socks must you take to be sure of a matching pair?",
        options: ["2", "3", "11", "12"],
        answer: 1,
        solution: "Two socks could be one of each colour. A third sock must match one of the first two — pigeonhole principle. So 3 socks."
    },
    {
        level: "subjr", topic: "Algebra", diff: "medium",
        q: "If x − y = 4 and xy = 21, what is x² + y²?",
        options: ["37", "58", "16", "42"],
        answer: 1,
        solution: "x² + y² = (x − y)² + 2xy = 16 + 42 = 58."
    },

    /* ================= JUNIOR (Bhaskara, Std IX–X) ================= */
    {
        level: "junior", topic: "Algebra", diff: "medium",
        q: "If a + b + c = 0 and abc = 4, what is the value of a³ + b³ + c³?",
        options: ["0", "4", "12", "64"],
        answer: 2,
        solution: "The identity a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca) shows that when a + b + c = 0, a³ + b³ + c³ = 3abc = 12."
    },
    {
        level: "junior", topic: "Number Theory", diff: "medium",
        q: "What is the remainder when 2<sup>100</sup> is divided by 7?",
        options: ["1", "2", "4", "6"],
        answer: 1,
        solution: "2³ = 8 ≡ 1 (mod 7), and 100 = 3 × 33 + 1, so 2¹⁰⁰ = (2³)³³ × 2 ≡ 1 × 2 = 2 (mod 7)."
    },
    {
        level: "junior", topic: "Number Theory", diff: "easy",
        q: "How many positive divisors does 360 have?",
        options: ["18", "20", "22", "24"],
        answer: 3,
        solution: "360 = 2³ × 3² × 5. The number of divisors is (3+1)(2+1)(1+1) = 4 × 3 × 2 = 24."
    },
    {
        level: "junior", topic: "Geometry", diff: "medium",
        q: "A right-angled triangle has legs 6 and 8. What is the radius of its inscribed circle?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        solution: "The hypotenuse is 10. For a right triangle, the inradius is r = (a + b − c)/2 = (6 + 8 − 10)/2 = 2."
    },
    {
        level: "junior", topic: "Algebra", diff: "easy",
        q: "If α and β are the roots of x² − 5x + 6 = 0, what is α² + β²?",
        options: ["11", "12", "13", "25"],
        answer: 2,
        solution: "α + β = 5 and αβ = 6, so α² + β² = (α + β)² − 2αβ = 25 − 12 = 13."
    },
    {
        level: "junior", topic: "Counting", diff: "medium",
        q: "How many integers from 1 to 1000 are divisible by neither 2 nor 5?",
        options: ["300", "400", "500", "600"],
        answer: 1,
        solution: "By inclusion–exclusion: 1000 − 500 (multiples of 2) − 200 (multiples of 5) + 100 (multiples of 10) = 400."
    },
    {
        level: "junior", topic: "Algebra", diff: "medium",
        q: "What is the value of 1/(1·2) + 1/(2·3) + 1/(3·4) + … + 1/(99·100)?",
        options: ["1", "99/100", "100/101", "1/100"],
        answer: 1,
        solution: "Each term telescopes: 1/(n(n+1)) = 1/n − 1/(n+1). The sum collapses to 1 − 1/100 = 99/100."
    },
    {
        level: "junior", topic: "Geometry", diff: "easy",
        q: "A chord of length 16 is at distance 6 from the centre of a circle. What is the radius of the circle?",
        options: ["8", "9", "10", "12"],
        answer: 2,
        solution: "The perpendicular from the centre bisects the chord, giving a right triangle with legs 8 and 6. So r = √(8² + 6²) = √100 = 10."
    },
    {
        level: "junior", topic: "Counting", diff: "easy",
        q: "At a party of 10 people, everyone shakes hands with everyone else exactly once. How many handshakes take place?",
        options: ["90", "50", "45", "100"],
        answer: 2,
        solution: "Each handshake is a pair chosen from 10 people: C(10, 2) = 10 × 9 ÷ 2 = 45."
    },
    {
        level: "junior", topic: "Number Theory", diff: "medium",
        q: "What are the last two digits of 7<sup>2024</sup>?",
        options: ["01", "07", "43", "49"],
        answer: 0,
        solution: "7⁴ = 2401 ends in 01, so 7⁴ ≡ 1 (mod 100). Since 2024 is a multiple of 4, 7²⁰²⁴ ≡ 1 (mod 100), i.e. it ends in 01."
    },
    {
        level: "junior", topic: "Number Theory", diff: "hard",
        q: "For every prime p greater than 3, the largest number that always divides p² − 1 is",
        options: ["12", "16", "24", "48"],
        answer: 2,
        solution: "p² − 1 = (p−1)(p+1). These are consecutive even numbers (one divisible by 4), giving a factor of 8; also one of p−1, p, p+1 is divisible by 3, and it isn't p. So 24 always divides p² − 1, and p = 5 gives exactly 24."
    },
    {
        level: "junior", topic: "Algebra", diff: "medium",
        q: "The sum of the first n terms of an arithmetic progression is 3n². What is its 10th term?",
        options: ["57", "60", "27", "63"],
        answer: 0,
        solution: "The nth term is Sₙ − Sₙ₋₁ = 3n² − 3(n−1)² = 6n − 3. For n = 10 this is 57."
    },
    {
        level: "junior", topic: "Counting", diff: "easy",
        q: "How many solutions in positive integers does x + y = 10 have?",
        options: ["8", "9", "10", "11"],
        answer: 1,
        solution: "x can be any of 1, 2, …, 9 (then y = 10 − x is also positive): 9 solutions."
    },
    {
        level: "junior", topic: "Algebra", diff: "hard",
        q: "If x + 1/x = √3, what is the value of x³ + 1/x³?",
        options: ["0", "3√3", "√3", "1"],
        answer: 0,
        solution: "Cube the given: (x + 1/x)³ = x³ + 1/x³ + 3(x + 1/x). So 3√3 = x³ + 1/x³ + 3√3, giving x³ + 1/x³ = 0."
    },
    {
        level: "junior", topic: "Number Theory", diff: "medium",
        q: "What is the sum of the digits of the number 2<sup>10</sup> × 5<sup>7</sup>?",
        options: ["7", "8", "10", "13"],
        answer: 1,
        solution: "2¹⁰ × 5⁷ = 2³ × (2 × 5)⁷ = 8 × 10⁷ — the digit 8 followed by seven zeros. Digit sum = 8."
    },
    {
        level: "junior", topic: "Counting", diff: "medium",
        q: "How many three-digit numbers have all three digits distinct?",
        options: ["720", "648", "504", "900"],
        answer: 1,
        solution: "First digit: 9 choices (1–9). Second: 9 (anything except the first). Third: 8. Total 9 × 9 × 8 = 648."
    },
    {
        level: "junior", topic: "Algebra", diff: "easy",
        q: "For what positive value of k does x² + kx + 9 = 0 have equal roots?",
        options: ["3", "6", "9", "12"],
        answer: 1,
        solution: "Equal roots need discriminant zero: k² − 36 = 0, so k = 6 (taking the positive value)."
    },
    {
        level: "junior", topic: "Geometry", diff: "hard",
        q: "A triangle has sides 13, 14 and 15. What is its area?",
        options: ["84", "80", "90", "72"],
        answer: 0,
        solution: "Heron's formula with s = 21: area = √(21 × 8 × 7 × 6) = √7056 = 84. (A classic worth remembering.)"
    },
    {
        level: "junior", topic: "Number Theory", diff: "medium",
        q: "A number leaves remainder 2 when divided by 3 and remainder 3 when divided by 5. What remainder does it leave when divided by 15?",
        options: ["5", "8", "11", "13"],
        answer: 1,
        solution: "Test numbers ≡ 3 (mod 5): 3, 8, 13… Among these 8 ≡ 2 (mod 3). ✓ By CRT the answer is unique mod 15: remainder 8."
    },
    {
        level: "junior", topic: "Number Theory", diff: "medium",
        q: "In how many zeros does 100! end?",
        options: ["20", "24", "25", "10"],
        answer: 1,
        solution: "Count factors of 5: ⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24."
    },
    {
        level: "junior", topic: "Algebra", diff: "easy",
        q: "The geometric progression 2, 6, 18, … — what is its 6th term?",
        options: ["162", "243", "486", "324"],
        answer: 2,
        solution: "The ratio is 3, so the 6th term is 2 × 3⁵ = 2 × 243 = 486."
    },
    {
        level: "junior", topic: "Algebra", diff: "easy",
        q: "What is the minimum value of x² − 6x + 11?",
        options: ["11", "2", "3", "−2"],
        answer: 1,
        solution: "Complete the square: x² − 6x + 11 = (x − 3)² + 2 ≥ 2, with equality at x = 3."
    },
    {
        level: "junior", topic: "Counting", diff: "hard",
        q: "How many positive integers less than 100 are perfect squares or perfect cubes (or both)?",
        options: ["11", "12", "13", "14"],
        answer: 0,
        solution: "Squares: 1², …, 9² → 9 numbers. Cubes: 1, 8, 27, 64 → 4 numbers. Both (sixth powers): 1 and 64 → 2. By inclusion–exclusion: 9 + 4 − 2 = 11."
    },
    {
        level: "junior", topic: "Geometry", diff: "easy",
        q: "A point is 13 cm from the centre of a circle of radius 5 cm. What is the length of a tangent from the point to the circle?",
        options: ["8 cm", "10 cm", "12 cm", "√69 cm"],
        answer: 2,
        solution: "The tangent is perpendicular to the radius at the point of contact: length = √(13² − 5²) = √144 = 12 cm."
    },
    {
        level: "junior", topic: "Algebra", diff: "easy",
        q: "If f(x) = x² and g(x) = 2x + 1, what is f(g(2))?",
        options: ["9", "17", "25", "5"],
        answer: 2,
        solution: "g(2) = 5, then f(5) = 25."
    },

    /* ================= INTER (Ramanujan, Std XI–XII) ================= */
    {
        level: "inter", topic: "Functions", diff: "medium",
        q: "How many real solutions does the equation x = sin x have?",
        options: ["0", "1", "2", "infinitely many"],
        answer: 1,
        solution: "For x ≠ 0, |sin x| < |x|, so the only solution is x = 0. Exactly one real solution."
    },
    {
        level: "inter", topic: "Binomial Theorem", diff: "easy",
        q: "What is the coefficient of x² in the expansion of (1 + x)<sup>10</sup>?",
        options: ["10", "45", "90", "120"],
        answer: 1,
        solution: "The coefficient of x² is C(10, 2) = 45."
    },
    {
        level: "inter", topic: "Combinatorics", diff: "medium",
        q: "How many onto (surjective) functions are there from a set with 3 elements to a set with 2 elements?",
        options: ["8", "6", "12", "9"],
        answer: 1,
        solution: "There are 2³ = 8 functions in total; subtract the 2 constant functions, which are not onto: 8 − 2 = 6."
    },
    {
        level: "inter", topic: "Complex Numbers", diff: "easy",
        q: "What is the value of i<sup>2026</sup>, where i = √(−1)?",
        options: ["1", "−1", "i", "−i"],
        answer: 1,
        solution: "Powers of i cycle with period 4. Since 2026 = 4 × 506 + 2, i²⁰²⁶ = i² = −1."
    },
    {
        level: "inter", topic: "Limits", diff: "easy",
        q: "The limit of (1 + 1/n)<sup>n</sup> as n → ∞ is",
        options: ["1", "2", "e", "∞"],
        answer: 2,
        solution: "This is the classical definition of Euler's number e ≈ 2.71828."
    },
    {
        level: "inter", topic: "Sets", diff: "easy",
        q: "How many non-empty subsets does a set with 10 elements have?",
        options: ["1024", "1023", "512", "2047"],
        answer: 1,
        solution: "A 10-element set has 2¹⁰ = 1024 subsets; excluding the empty set leaves 1023."
    },
    {
        level: "inter", topic: "Number Theory", diff: "medium",
        q: "What is the remainder when 10<sup>100</sup> is divided by 7?",
        options: ["2", "3", "4", "5"],
        answer: 2,
        solution: "10 ≡ 3 (mod 7) and 3⁶ ≡ 1 (mod 7) by Fermat's little theorem. Since 100 = 6 × 16 + 4, the remainder is 3⁴ = 81 ≡ 4 (mod 7)."
    },
    {
        level: "inter", topic: "Algebra", diff: "hard",
        q: "If α and β are the roots of x² − x − 1 = 0, what is α⁵ + β⁵?",
        options: ["7", "11", "18", "25"],
        answer: 1,
        solution: "Let pₙ = αⁿ + βⁿ. Since α + β = 1 and αβ = −1, pₙ = pₙ₋₁ + pₙ₋₂ with p₁ = 1, p₂ = 3. So p₃ = 4, p₄ = 7, p₅ = 11 (the Lucas numbers)."
    },
    {
        level: "inter", topic: "Series", diff: "easy",
        q: "What is the sum of the infinite series 1 + 1/2 + 1/4 + 1/8 + …?",
        options: ["3/2", "2", "e", "it diverges"],
        answer: 1,
        solution: "A geometric series with first term 1 and ratio 1/2 sums to 1/(1 − 1/2) = 2."
    },
    {
        level: "inter", topic: "Combinatorics", diff: "easy",
        q: "In how many distinct ways can 5 people be seated around a circular table (rotations considered the same)?",
        options: ["120", "60", "24", "48"],
        answer: 2,
        solution: "Fix one person to remove rotational symmetry; the remaining 4 can be arranged in 4! = 24 ways."
    },
    {
        level: "inter", topic: "Number Theory", diff: "hard",
        q: "How many pairs of integers (x, y) satisfy x² − y² = 17?",
        options: ["1", "2", "4", "0"],
        answer: 2,
        solution: "(x − y)(x + y) = 17, a prime. The factor pairs (1,17), (17,1), (−1,−17), (−17,−1) give (x, y) = (9, 8), (9, −8), (−9, −8), (−9, 8) — four pairs."
    },
    {
        level: "inter", topic: "Binomial Theorem", diff: "easy",
        q: "What is the value of C(10,0) + C(10,1) + C(10,2) + … + C(10,10)?",
        options: ["512", "1023", "1024", "2048"],
        answer: 2,
        solution: "Set x = 1 in (1 + x)¹⁰: the sum of all binomial coefficients is 2¹⁰ = 1024."
    },
    {
        level: "inter", topic: "Combinatorics", diff: "easy",
        q: "How many distinct arrangements are there of the letters of the word LEVEL?",
        options: ["120", "60", "30", "20"],
        answer: 2,
        solution: "5 letters with L twice and E twice: 5! / (2! × 2!) = 120 / 4 = 30."
    },
    {
        level: "inter", topic: "Trigonometry", diff: "medium",
        q: "If sin θ + cos θ = √2, what is the value of sin θ · cos θ?",
        options: ["1", "1/2", "√2/2", "1/4"],
        answer: 1,
        solution: "Square both sides: 1 + 2 sin θ cos θ = 2, so sin θ cos θ = 1/2. (This forces θ = 45°.)"
    },
    {
        level: "inter", topic: "Algebra", diff: "easy",
        q: "What is the sum of the roots of x³ − 6x² + 11x − 6 = 0?",
        options: ["6", "11", "−6", "1"],
        answer: 0,
        solution: "By Vieta's formulas the sum of roots is 6 (the roots are in fact 1, 2 and 3)."
    },
    {
        level: "inter", topic: "Series", diff: "medium",
        q: "What is the value of 1·1! + 2·2! + 3·3! + 4·4!?",
        options: ["119", "120", "96", "153"],
        answer: 0,
        solution: "Use k·k! = (k+1)! − k!. The sum telescopes to 5! − 1! = 120 − 1 = 119."
    },
    {
        level: "inter", topic: "Probability", diff: "easy",
        q: "Two fair dice are rolled. What is the probability that the sum is 7?",
        options: ["1/12", "1/9", "1/6", "5/36"],
        answer: 2,
        solution: "Six favourable outcomes — (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — out of 36: probability 6/36 = 1/6. Seven is the most likely sum."
    },
    {
        level: "inter", topic: "Combinatorics", diff: "hard",
        q: "In how many ways can 10 be written as an ordered sum of 1s and 2s? (e.g. 1+2+1+… — order matters)",
        options: ["55", "89", "144", "64"],
        answer: 1,
        solution: "If f(n) counts such sums, the first term is 1 or 2, so f(n) = f(n−1) + f(n−2) with f(1) = 1, f(2) = 2 — Fibonacci! f(10) = 89."
    },
    {
        level: "inter", topic: "Logarithms", diff: "medium",
        q: "What is the value of log₂(8√2)?",
        options: ["3", "7/2", "4", "5/2"],
        answer: 1,
        solution: "8√2 = 2³ × 2^(1/2) = 2^(7/2), so the logarithm is 7/2."
    },
    {
        level: "inter", topic: "Trigonometry", diff: "medium",
        q: "What is the maximum value of 3 sin x + 4 cos x?",
        options: ["4", "5", "7", "√7"],
        answer: 1,
        solution: "a sin x + b cos x has maximum √(a² + b²) = √(9 + 16) = 5."
    },
    {
        level: "inter", topic: "Algebra", diff: "medium",
        q: "How many distinct real roots does the equation x⁴ = 16 have?",
        options: ["1", "2", "4", "0"],
        answer: 1,
        solution: "x⁴ − 16 = (x² − 4)(x² + 4). Only x² = 4 gives real roots: x = ±2. Two real roots (the other two are ±2i)."
    },
    {
        level: "inter", topic: "Number Theory", diff: "hard",
        q: "What is the remainder when 1! + 2! + 3! + … + 100! is divided by 12?",
        options: ["0", "3", "9", "11"],
        answer: 2,
        solution: "From 4! = 24 onwards every factorial is divisible by 12, so only 1! + 2! + 3! = 1 + 2 + 6 = 9 matters. Remainder 9."
    },
    {
        level: "inter", topic: "Complex Numbers", diff: "medium",
        q: "If ω is a non-real cube root of unity, what is the value of (1 + ω)³?",
        options: ["1", "−1", "ω", "0"],
        answer: 1,
        solution: "Since 1 + ω + ω² = 0, we have 1 + ω = −ω². Then (1 + ω)³ = −ω⁶ = −(ω³)² = −1."
    },
    {
        level: "inter", topic: "Combinatorics", diff: "easy",
        q: "How many five-digit numbers are palindromes (read the same forwards and backwards)?",
        options: ["900", "9000", "1000", "8100"],
        answer: 0,
        solution: "A palindrome abcba is fixed by its first three digits: 9 choices for a (not 0), 10 for b, 10 for c — 900 palindromes."
    },
    {
        level: "inter", topic: "Functions", diff: "easy",
        q: "How many functions are there from a set with 3 elements to a set with 4 elements?",
        options: ["12", "24", "64", "81"],
        answer: 2,
        solution: "Each of the 3 elements independently maps to any of 4 targets: 4³ = 64 functions."
    }
];
