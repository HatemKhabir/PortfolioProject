import sports from "../assets/sportsportal.jpg"
import Carousel from "./Carousel";
import ProjectSection from './ProjectSection';
import music from '../assets/musicplayer.jpeg';
import logo from '../assets/logo.png'
function Projects() {
    let cards = [
        {
          key: 0,
          content: (
            <ProjectSection title="Werewolf Online Game" imagen="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgaGhoeHBwcHBwZHBwcHh4cGhwcHBwcIS4lHh4rHxwaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJSs0NDQ0NDY0NDQ0NDQ2NDQ0NDQ9NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADcQAAEDAQUGBQQCAQUAAwAAAAEAAhEhAzFBUfAEBRJhcYGRobHB0QYi4fETMlIUI0JicjOCsv/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAqEQACAgIBAwMEAgMBAAAAAAAAAQIRAzEhBBJBE1FhBSJxgZGhFDKxQv/aAAwDAQACEQMRAD8A8B48UpRPLskWnPBco9hZY18JxGCmYFUOuURi5om5YtJBKotpVSojZqc0AypAQX6/CVDsc90MapnmmwR10apivkb7jr9JRAzrq9U8xVRxYpIHVj4kyyBfPX8KWxr3VOOCYCc+ENxyUOZJgH891o05oBMGtM5Ic4iUPepL7zggCuIG5MFQCrnmkxoReszaZaCTm0qmBF+sk6Its1B0UideyhrZzhWIQMlgBwK0mqkvCA5JjQ3OhDrknpyeyQzCTz13QteMZIUiNE2U4kXrXhxF6za2l1fdMTKTBcFEGNUSZ1m749FL7Q90mP1roimFqxvYFQNNe6jmmQ0wDS8joMvEeKYA8rKVrakCppd50Hmp8ULRF7KaKfNyTX8U0S4pmOndIOCKHfsaOdqPlQ8JTy+SoccxEppCbBoW3Dr3WcCkVEa91sy79JMEAKnim8qXN8/2pF819kUNsuRiiDkk1KecawTCwIOPjf5q2uzyvSbKC6EgJe7zwTaMIj1TbHJHETcmBo5wGvRQ93ipem106lKht+AaVT6IbRK1R5DSAWlbpwWpoFixqpzkmhpl/wAiFPHzHghA7AUxTnXLqsmkJMvvwu9ynRCxvKzbXUhU5h7KXO4QScJ5qSISflisX/e9v+IbPUz7ALmZtjXW0VjhIH/qZPouPdlu4veSaFpJwuuUbsE2k1xP7nBaPSSu/Y5b6uU+xLy2de27YC9rIoHNJPmAOUro23auD/jJwXkt++1qb345CvoE94Whc8gSYoBJM9lP0o2l8clf+XNRnJbbpHp7sfLByJnrJJ9V1vGCw2RgYwNN95jM9Vsy2mou17rNPmTa0dTBaxpS3RmRrmqLsCKoJJ5T+0yEiaE3WCriQxtY/Cq1aEiSXBGGtYKgKjWazJzIx7xisbTbWC8zWPtifAm75TUW9IrllhHmTSOt3JTxVzXmWu9W14QScMj7hc9pvFx4ooCO46EKyOGTM0+vwx07/B7gdHwi2tmj+xApNSBIGS+dftjzMuvEHwi5Yl03qxdN7szy+qKqiv5PeG2WYj7hcT2+eSg74ZFA49gF4a32bgn7+I8h+1J4Irl2ylfUc0nSpfJ6TN8CILDjUeS32XbmPpHCRgTE0vC4i7ZzIhwyNa4ZnqurZ9nsrm8L5zrTpheq5Qglpo0YcudyS7k0dnH91B3+FrE9Vg1rW/a0ADw6q2u0Vna9jqRb8jI5qie6qikCEiQ4Ogmj+TmE0gOThkYq2ti6uab3ZSsgaqeyHCOkGka/K5Nsb9pjInGadNUWzHQot60jtnyRHiRHL90Gjx91O+5wrVpFL8LlG7nw+DjLdHssQ8sfIiQcKj9JPtCXF9xJmmBXQ7bv5R5xZVHtvab/AIOjZaWoF1XXVihxS2Js2rZr9xNeVbx0XO95JLjfmr2a2DHhxmmV6HF0/ehRyLuSek7/AEeht+2kOLW3xecOgXdYMhrQBSBHuvGa02tpNwcZPIUC91pxxWbKlFKK/Z1ullLLOU2+NL8CeMcf0qD8JXFte2BvFBBdlUry7faXPoTSZjCUoYXJWyWfroYnS5Z6VvvFrJDfuIMVuHcFcVvvF7pgwCIih7gwuSElqjijHwcnJ1mafml7IpzybyTF0kmFJQhTMzbewKIQtLOwc7+rSeiG6BJt0jJNU9hF4I6qSmDVAVrs7GOnifw0pQmVkrsGNJhx4RnEpS0Sh/suE/zo63bPZESLSDE1HaFP+geCC0g1FQbsaobsjHf1tB0Ig+qzds9owxDuXDPjRVfCf8mrtW3Dj3TPcZxyOMNdzBg+BWk1xPj4Lk2a1fwgPY7/ANYxzC6w38YLHNU+f6O5hknG1f72aNPkm06/alpjVyRIoJriqy+zSShTJ0PwhAGZaT16KmNj8KQa39ky/kmRTRmRhrVUi6fHJU8awqpYcsFIi9ni7xbDzUVyuGQ8IXMSu7fDRLSImMr7qkrz1vxu4pnm+qj25mvkFTWzAF59Ul37qseJxJEgapzTlLti2Qw43kmoryd+wbKGNk3m+bxy6Lk2zb4lrSOrTdy5rXeO3R9jCQ7GnlPwvGKpxwcn3SN/U9RHHH0cXjbKe8kyTPWqQSQtJy7GEJgIQIFShaPs3NglpAIkTiOSAI4VTHuaZBI6JcSUo2NNrlHr7NtTXjheBMcomRGPNYbZu4t+5kkZYgcs158r2th2zjhpP3fcbqag+SzzUofdHXlHRw5MfULsy78M8Rd9lslm5o/3IcbwYEeK9G22Br7xBOIp4jFcL90Owc0o9ZSW6H/h5MUuYqSJt92OElv3DK4/lZ7Jtb2OAqQbwQXHnAXo7Iy0YOEta4DHi8ohdbSDWFU8vDTpmmHSJtTxtxflE2Vo1wlp69eYwKsupJScbzTqom/HLsqODoptKmWGqxRZN/V6A4knKiKHZt2KFFM/NCRKwbUgzhGvVM0Ou6T+nVI9kCJe7LX7SDeX7Q1vh5qiI6VuTI75PN3qPsBnGg9SvJAXvbePsddzJy+cO68JbcDuJwvqEay37oF6Wy24ZYkiZLooYg4HwXmJk4KyUVJUzLhyvG21umhucSZJkpJIUysaYCGhVCCJICHNIotGtqF9836VG2bHZ21jJtGjgeCRDi0R407yFCUlGrJRj3aPzzJfdbd9Pvfu3Z7Vo+5nFIIgljnOcCL5vB6E4pbp+gnu/wDl4mfcBJAihPEQLzQCMMar9G2GyYyyZZNlwYwNkSAc8THTn0WbN1EU12vlFsMbd2fgT7MtJBEEKV939bfTBY4PswBZuma/0gFzuo7z4L4YtIoZBWmE1ONoqlFxdMlU10VUoKmB9Bse1h4w4qyK3TFfLxW/DWq8HYNoLHgzAN55X66r3mZm6/WawZodsuNHoejz+tDna2EX8u9FT8TemRkoZStaqk1gxt/byyT96a80nR+/btKbiM/VMDO0y50TaecVUjWC0Zf+k2RXLNZOSFFOeu6FEmQZOrkg/rrUrSDfkKqDjkddkyLQF2GfkmWnvXokHRQ+mskcVUDMtpZINJORuJF05iV884VK+le2aLwdusuF5EQLx0unxBWrp5bRyfqUNS/RzwhCa1HJEmEIQBQTChdewbI60e1jQSSYiCetBkK9kN0ROncm7XW9oGNFTPIUqfJfsm6rBuw7O1vFzIihdFYm78FcX0R9P/6ZkvDf5DJJwP8AiJMRE+a7t57GbUfbjM1gTjUY18lzepzOXETXgxpO2fDb2+rnuJ4I4Qf7OJgkXloFTjXmt/pnfdq+0/jfw0bxAt4gKGkgmniuBn0hb8Qa17SAKOLCXAeMFfUbj+nW2TRM8Rq8n+zueEAVgQqcqwqFQ5l7mxPjng9ne2yttbJ7SA6W/bLeKCW4eOeK/Ed4WYbaOAMwb54vMXr90trRrWO4nGACa5dOgX4nvt5NqZbwRQNA4QBJIAGAgz/9itXRt8ow5/B5sIIQUStxmEve2C2L2VImcMMB6Lwgu7dlrDuGgBvJ5fkqrNHuibehy9mVJ6fB7AoZxVOGru6h9D6Sgvu6LAehtaKL/hVw86KHwetEmOFb78Eg8gWkaqqY3Xqq79JSYIvvRYUP+PmfFCz/AJDz8/lNHIcAWyUoVgTSLvRJpg8p16Jioh2EDuiFp/GEgcNd0WOvckNxleTvazgg1kzPQQAvXc66Fz7XZ8bHNrPaeQrzVmKXbJMzdXi9TE0t7Pn4TCSa6B5wFtYbO554WNLicAJPksV+ifRW89mLOG04Wva2oIA4mtOBgkkA3UmaEwVVlnKEbirJQipOm6PI3J9FW1qQ57eBlJJyNO+HiF+j7g+l7HZhQBz5IDiLhdIy/d64Ns+sbJjX/wADXWhYASa8AY7ndHEAKXGma+b359U2xkl/Ax9nx2RsiHiXf8HlwzltAILheszlkycNUWpRjyfb7y3zZ2I4bR445IAiJde1obe4wQKC9RuHeNntPE+zJhruEiC3hpdB6+q/P917nftDhZ8NkXCxsyHse6GlryW2hLal5DgC3/qDIX6JsO622DCOJxJJc9xq57ze50Y0wWfJBR+X/RZCTl8I7wxomRfMXGajyUl7RJBmG3m8ARMzcvH3rv8AsbLi43AACQ2v3QAYEf8AIyIFLpwX5/vv6xfaUsxwMrhDqyKgUEA0vgwcEY8Up6XHuEsiiez9afU3DxWLBfEuqDUXARwxEVBzuX51aWhcSTWU7a1c8y4knMqF0sWJY40jLKTk7YITJUqwQyrs3w4OiYIMKEFIE6do+m4aAkCckF0hY7DaFzGzOUk35npK2iTryXNkqbTPUY5d0FJeUJ58/wBJsaPTXgrcy6tda7oZ2SvgnXIiTIOHrzS4xTX7TJpoJPbiM9dr0hv4H/INQhH8epQnSD7g4Y99dVAmFrPPXNIkVrclYEh4P4SbM3etUjHYjV6cwmKxPHig1wQwzFL80OF/n3TA8feWy8BDhEGkDCg/K4pX0zmgiT2xXgbXsxY6DWgMi6v6WvDk7l2vZxOu6X05d8dP+jBAQhaDnnftO9bV7uNzocbMMcQI42gR9wuJiPAG9fZfSH025/8AusdaWVjaWZa/jDPvP/JrJBkCC4OLQbuZX58vUP1BtJZwG1dwxwxSgvpShmDIrQZKqcG1URxlTtn6jtW/9k2JjbOzLQ277KunAkCskVkxcvjN9/Wlra0Z/tiaFpqIqI51Ff8ArOK+Pe8kkkySSSTeSbyUioxwRXL5Y5ZJPhcG1tbOcSXOJPMyTzKxIRKJV5WCIRKCUAIqrOzLpAE3nwUherY2X8dmXyOIihFYBiAoSlSL8OH1G/ZK2eVCChBUyo9fdD5aWzJnG4N9Kkr0njDV68bdFoA4iTW4YY1OsV6xf3vrisGaNTZ6DoZKWFX+DThwrPO5TzVNF5xKgnHUlUm16HhKJJ6KC7PVdeKGt8E6I2X2QnxHJCQwignXJZlkGfyVqW+qzfhn7IQNDDZ80uDGMca3qmjPFLilMROoVG2ZMEgGl9FmXAED0RbWYc0tNfPwTpeSDk6+3Zo4a81jbWLXgA3A4UXlv2G0aaCa0IIGiqsN4Ob9rrprmrlie4uzE+ri32ZotJ++jmt9nLDBHfDXwsoX0Acx7cCO1968nadiLKiozyrHx4q/HlviXDMPUdI4Luhyv+HLCSYKRVxgFKE4RCCQBCSJQA0Iau7YdgLyC4fbE3xOSjKSirZPHjlkl2xXJW7dmn7yLrhF9L0by2ifsGdb8JELu262DGQL4AA9TPJeG6bzNcTjnXFU47nLuf6N3UNYYelDe2yUIQVoOcdGwWkPFTBpTHIeML3zjXyXzTHQQZiCD+l9GwyOKuHaRSVk6iPKZ1/pk/tcP2ah1BOd6HCh7rJ55K2mmsVlo6qfgBd7ymPTUoAM1TJu5oGhcX/b1QteLmPBCCRFIv1epdrrfcpaPn4UubjrVUUQbLmlVja7Iw3gH1Hfqtqa8VhaWbr2PLTiCJafjspR3w6K8lOPKs8vaNhe10tl1af5awSbtVo2hnD+w68kjtNo0mS6+sikq3b0fEENPj8rbUq5SZxe7GpNpuLE7eT4wwrC5HuJJJMkldNvtb3tiABWYbgDn1XJClBJeKM2acm0rbXyNryLiQulu3vznkQCuVAUnFPaIRySjptGlq/iMwB0WfEhEJrgi227YIlCEwEgBXZWbnH7ROa9jZd2hoPFwvOByHyq55Ix2X4emnmfC49/By7HsHFV0it0RPivWs2AUAjlEBU8ZQoc/ULFKbmzu4enjgVLfv7nk7a/jtOGpAIbjT/I6yXXvhoDGikgiPA3K9ksIaHEfeRJNxkkkj1XJvh9WjqfT4V0ZXJRWkYskHDFOcty/o88sIAJFDcc4ScwgAkQDMc13bY2LNgNCMD0P4StGf7DTiHZyYqI/HJXqevzRgeCm1ekmY7Rs4DWPBkOv5OxHr4Fejut8suuxm+VgwcWzkf4mRU0rjlQo3QakCOs1xuGrwq5/dF34Zq6dKGaLjpo9Tj5d0NGSZdeEB8Ed+uqLGdopzlmXSaTqFoTJy/IWYab41n+EITNJOoQl/Gcj5fCEByW70Uudy1S9JrqolKiVkluslm97m3N4hlMeErRx16J8WdFJMhJXp0eXtG8ng8PCAMnCSszvBuNk2aY5dl3bS6zJh8TcaXDkY5rh/nsZ/ob+VaQKStUaa0zk51OMnc1+yX7zdEANEzNK81xBdtrtrYIYxonExPh+1xsaTcrYcLVGLM3Jr7r/QkLss93POAaJx/C7WbqYDDiTlhCUs0Y+SWPo809KvyeMEAL6D/QswaK54dsOy0Fm0VAE3TAu6qt9RHwjVH6ZL/00eGzYnn/AIkUxpPRd9jusAEvM05jhzrNV3mtBl7IJwvVUs0nrg14+gxQdvn86FZ2cAARQQnhXBBMZUhaPZRUtm2KVUjJxCLjXXNPrSvRW9uuaLHVmYM3U1evF2hhfaxiTF2HwvbM3ZwFiyzgk/5HyuHpKtxy7bZl6nD6qjHxds83ejqtaLgMord7eavbOJtkxuBvpBpcF122yte9szQS6vP7R6qtpsJYW9hyViyJUjK+mlJzfvwv0YbDY8VkRWs8sojO5LdlkGF5NYJb4Xld/sKJWVkBN8kknv8ApVvI2n8mmPTRi4PylRceZp7+aGkEDr78lIZfJuuTY6hnDmLtUVRqTLcJFL75UAz0zxTcKyEg2mKAYQc0Ipl/+k0AVw/hVPuoDitDnjgosmjEtm6KX81AvGui0rKAzHp4qdkKEWAjObxSnZcr92sgwCKH2MhdLZ6fCqae6alKOmVyxQn/ALRs5W7AyaNy7QffuuuzY3BoE3wPGYxUuAr+Y1emUnKUtslDFCGkkDhEAJOZ4+qdBKXEkTBpPpKbmBJ3LNU6MBCAJaMKeSpogZHK9ID3VN+L0MSIb3yyVuMD1Seyp7fIS4TjrFA+USAm3qrJu+EuEYfCLFQjd+1Tag9fRQ7VMloMwkNbIa4ikelOScqSLvTxKH+aYDjXuhrsITZcblJHPV6AG5ECNdFURU+qgu17IApzsFQqAdZLM1qqa6RCQJk+OuyFX8vNvn8IQPgT6XdkB888UX40rRSBl8z0TE2NxuTFByrfemD1/aWskAEjWeikQmHYTrUJOF6AHxD8a6pYa1kpDrsj63rRrc/gHr4I0JOyDQx4TrJUBrJLGvgqLpHJDBCJv12SBpzS4a35aoqxA11qgYWbZ+PyqN8gT8qCDhfoKpPTUSgFoRMxzStBSfP2VHrrqgGZEDlggCAPRVPrCYFI9EmZZoAt7ad1lxVhaOPgs9a8UIGVA60SY7oqiKqXC6iBMGnum5HFGKniBEwgLKOUKeIyLvx80UteJi++qYby1OGSdCu9DYRhrVFRaZ6QhlmBlrPwWgEKLZJJtcmUjkha/wAg/wAkIsKMjikPdCExeS2ex9lFrj0HshCBvQWlzu3orPv7IQgRm28axVuw6/CaE/IloyfhrEpsu1mhCAWxm/WRVYnp8JoSGhtuKz/465oQhDG1GPb2CEIDwXr1WY/sf/R9EkIQmUcOiQuHX5QhAGwvHZQ7+x/8hCEkSZlZ3azVC7w9kkJlZXwfZaO/t4e6EIJRLZceqm1x7IQo+SzwCEIQI//Z" descr1="A social deduction game with day and night phases."  descr2="Game dev still in Progress following scrum and agile methodologies and pair programming session with a senior, using C# asp.NET , MsSQL and ReactJS" link="https://github.com/HatemKhabir/LoupGarouAPI" />
          )
        },
        {
          key: 1,
          content: (
            <ProjectSection title="Sports Portal" imagen={sports} descr1="A simple solution for sports nerds to communicate , organize and join games and check each other stats and records." descr2="App UI is still in developement,REST API and real-time Socket communication is ready." link="https://github.com/HatemKhabir/SportPortal"/>
          )
        },
        {
          key: 2,
          content: (
            <ProjectSection title="Music Player & Downloader" imagen={music} descr1="A multi functional Youtube Music Player , Where User can Download and Play Music mp3 from youtube directly , and also it can download playlists as well !" descr2="Built With
            C# .NetCore , YoutubeExplode , Google Youtube Apis, Guna2UI Framework, C# WinForms, Wmp Library" link="https://github.com/HatemKhabir/MusicPlayer-.NetCore-Updated-" demo="https://github.com/HatemKhabir/MusicPlayer-.NetCore-Updated-/blob/master/2024-03-09%2015-38-09%20(1).gif" />
          )
        },
        {
          key: 3,
          content: (
            <ProjectSection title="Rewards System REST API" imagen={logo} descr1="Hackathon solution in 36h Created REST API that provides the user with a reward games systems that can be obtained by redeeming XP points he get from one of our added features" descr2="Led the team of 3 to get the top 6 spot at the hackathon ! " link="https://github.com/HatemKhabir/telehermes2" demo="https://www.youtube.com/watch?v=97i5jDjoTPE"/>
          )
        },
        {
          key: 4,
          content: (
            <ProjectSection title="Contact Directory" imagen="https://cdn.pixabay.com/animation/2023/06/13/15/13/15-13-36-234_512.gif" descr1="My first C windows application : An easy to use windows application that represents a contacts directory that showcases file management where user can do CRUD operations on text files locally using C WinGui and using Data Structres and algorithms." link="https://github.com/HatemKhabir/C-phone-directory-Project-"/>
          )
        }
      ];
      return (
        <div name="projects" className='w-full h-screen bg-[#eaeaea] flex flex-col items-center justify-center'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 mt-auto'>
                <div className='-translate-y-48 pb-8 pl-4'>
                    <p className='sm:text-4xl font-bold inline border-b-4 border-[#606268] text-[#922e2e]'>Projects : </p>
                    <p className='py-4 mt-4 font-bold text-2xl'> My Personal Projects :  </p>
                </div>
            </div>
            <div className="-mt-20 w-full flex justify-center items-center">
                <Carousel
                    cards={cards}
                    height="500px"
                    width="50%"
                    margin="0 auto"
                    offset={200}
                    showArrows={false}
                />
            </div>
        </div>
    )
    
}

export default Projects;
