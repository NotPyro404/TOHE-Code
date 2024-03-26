import searchPlugin from '@vuepress/plugin-search'
import { defaultTheme, viteBundler } from 'vuepress'

export default ({
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'TOHE',
      description: 'An Among Us Mod that adds a ton of new roles and settings to the game!',
    },
    '/fr-FR/': {
      lang: 'fr-FR',
      title: 'TOHE',
      description: 'Un mod Among Us qui ajoute une tonne de nouveaux rôles et paramètres au jeu!',
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      title: 'TOHE',
      description: '一个在我们中间的模组，为游戏添加了大量新角色和设置！',
    }
  },
  bundler: viteBundler({
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'center' || tag === 'font'
        }
      }
    }
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/fr-FR/': {
          placeholder: 'Rechercher',
        },
        '/zh-CN/': {
          placeholder: '搜索',
        }
      },
      maxSuggestions: 10,
    })
  ],
  theme: defaultTheme({
    locales: {
      '/': {
        base: '/',
        navbar: [
          {
            text: 'Roles',
            children: [
              {
                text: 'All Roles',
                link: '/Roles.html',
              },
              {
                text: 'Impostor Roles',
                link: '/options/Settings/Impostors.html',
              },
              {
                text: 'Crewmate Roles',
                link: '/options/Settings/Crewmates.html',
              },
              {
                text: 'Neutral Roles',
                link: '/options/Settings/Neutrals.html',
              },
              {
                text: 'Add-on Roles',
                link: '/options/Settings/Addons.html',
              },
              {
                text: 'Experimental Roles',
                link: '/options/Settings/Experimental.html',
              },
              {
                text: 'Custom Settings',
                link: '/options/Settings/Custom.html',
              },
              {
                text: 'System Settings',
                link: '/options/Settings/System.html',
              },
              {
                text: 'Game Settings',
                link: '/options/Settings/Game.html',
              },
              {
                text: 'Game Modifiers',
                link: '/options/Settings/Modifiers.html',
              },
            ]
          },
          {
            text: 'About',
            link: '/AboutUs.html',
          },
          {
            text: 'Changelogs',
            link: '/Changelogs.html',
          },
          {
            text: 'Advanced',
            link: '/Advanced.html',
          },
          {
            text: 'Install',
            link: '/GetStarted.html',
          },
          {
            text: 'FAQ',
            link: '/FAQ.html',
          },
        ],
        sidebar: {
          '/options/Addons/Harmful/': [
            { text: 'Back to Addons', link: '/options/Settings/Addons.html' },
            { text: 'Disregarded', link: '/options/Addons/Harmful/Disregarded.html' },
            { text: 'Fool', link: '/options/Addons/Harmful/Fool.html' },
            { text: 'Fragile', link: '/options/Addons/Harmful/Fragile.html' },
            { text: 'Hurried', link: '/options/Addons/Harmful/Hurried.html' },
            { text: 'Influenced', link: '/options/Addons/Harmful/Influenced.html' },
            { text: 'Mundane', link: '/options/Addons/Harmful/Mundane.html' },
            { text: 'Oblivious', link: '/options/Addons/Harmful/Oblivious.html' },
            { text: 'Rascal', link: '/options/Addons/Harmful/Rascal.html' },
            { text: 'Statue', link: '/options/Addons/Harmful/Statue.html' },
            { text: 'Tired', link: '/options/Addons/Harmful/Tired.html' },
            { text: 'Unlucky', link: '/options/Addons/Harmful/Unlucky.html' },
            { text: 'Void Ballot', link: '/options/Addons/Harmful/VoidBallot.html' }
          ],
          '/options/Addons/Helpful/': [
            { text: 'Back to Add-ons', link: '/options/Settings/Addons.html' },
            { text: 'Autopsy', link: '/options/Addons/Helpful/Autopsy.html' },
            { text: 'Bait', link: '/options/Addons/Helpful/Bait.html' },
            { text: 'Beartrap', link: '/options/Addons/Helpful/Beartrap.html' },
            { text: 'Bewilder', link: '/options/Addons/Helpful/Bewilder.html' },
            { text: 'Burst', link: '/options/Addons/Helpful/Burst.html' },
            { text: 'Cyber', link: '/options/Addons/Helpful/Cyber.html' },
            { text: 'Double Shot', link: '/options/Addons/Helpful/DoubleShot.html' },
            { text: 'Flash', link: '/options/Addons/Helpful/Flash.html' },
            { text: 'Lazy', link: '/options/Addons/Helpful/Lazy.html' },
            { text: 'Loyal', link: '/options/Addons/Helpful/Loyal.html' },
            { text: 'Lucky', link: '/options/Addons/Helpful/Lucky.html' },
            { text: 'Necroview', link: '/options/Addons/Helpful/Necroview.html' },
            { text: 'Nimble', link: '/options/Addons/Helpful/Nimble.html' },
            { text: 'Overclocked', link: '/options/Addons/Helpful/Overclocked.html' },
            { text: 'Repairman', link: '/options/Addons/Helpful/Repairman.html' },
            { text: 'Seer', link: '/options/Addons/Helpful/Seer.html' },
            { text: 'Silent', link: '/options/Addons/Helpful/Silent.html' },
            { text: 'Sleuth', link: '/options/Addons/Helpful/Sleuth.html' },
            { text: 'Tiebreaker', link: '/options/Addons/Helpful/Tiebreaker.html' },
            { text: 'Torch', link: '/options/Addons/Helpful/Torch.html' },
            { text: 'Watcher', link: '/options/Addons/Helpful/Watcher.html' }
          ],
          '/options/Addons/Impostor/': [
            { text: 'Back to Add-ons', link: '/options/Settings/Addons.html' },
            { text: 'Circumvent', link: '/options/Addons/Impostor/Circumvent.html' },
            { text: 'Clumsy', link: '/options/Addons/Impostor/Clumsy.html' },
            { text: 'Last Impostor', link: '/options/Addons/Impostor/LastImpostor.html' },
            { text: 'Madmate', link: '/options/Addons/Impostor/Madmate.html' },
            { text: 'Mare', link: '/options/Addons/Impostor/Mare.html' },
            { text: 'Mimic', link: '/options/Addons/Impostor/Mimic.html' },
            { text: 'Stealer', link: '/options/Addons/Impostor/Stealer.html' },
            { text: 'Swift', link: '/options/Addons/Impostor/Swift.html' },
            { text: 'Tricky', link: '/options/Addons/Impostor/Tricky.html' },
          ],
          '/options/Addons/Miscellaneous/': [
            { text: 'Back to Add-ons', link: '/options/Settings/Addons.html' },
            { text: 'Egoist', link: '/options/Addons/Miscellaneous/Egoist.html' },
            { text: 'Lovers', link: '/options/Addons/Miscellaneous/Lovers.html' },
            { text: 'Rainbow', link: '/options/Addons/Miscellaneous/Rainbow.html' },
            { text: 'Reach', link: '/options/Addons/Miscellaneous/Reach.html' },
            { text: 'Workhorse', link: '/options/Addons/Miscellaneous/Workhorse.html' },
          ],
          '/options/Addons/Mixed/': [
            { text: 'Back to Add-ons', link: '/options/Settings/Addons.html' },
            { text: 'Antidote', link: '/options/Addons/Mixed/Antidote.html' },
            { text: 'Avenger', link: '/options/Addons/Mixed/Avenger.html' },
            { text: 'Aware', link: '/options/Addons/Mixed/Aware.html' },
            { text: 'Bloodlust', link: '/options/Addons/Mixed/Bloodlust.html' },
            { text: 'Diseased', link: '/options/Addons/Mixed/Diseased.html' },
            { text: 'Ghoul', link: '/options/Addons/Mixed/Ghoul.html' },
            { text: 'Gravestone', link: '/options/Addons/Mixed/Gravestone.html' },
            { text: 'Guesser', link: '/options/Addons/Mixed/Guesser.html' },
            { text: 'OIIAI', link: '/options/Addons/Mixed/OIIAI.html' },
            { text: 'Rebound', link: '/options/Addons/Mixed/Rebound.html' },
            { text: 'Schizophrenic', link: '/options/Addons/Mixed/Schizophrenic.html' },
            { text: 'Stubborn', link: '/options/Addons/Mixed/Stubborn.html' },
            { text: 'Susceptible', link: '/options/Addons/Mixed/Susceptible.html' },
          ],
          '/options/Crewmates/Basic/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates.html' },
            { text: 'Addict', link: '/options/Crewmates/Basic/Addict.html' },
            { text: 'Alchemist', link: '/options/Crewmates/Basic/Alchemist.html' },
            { text: 'Celebrity', link: '/options/Crewmates/Basic/Celebrity.html' },
            { text: 'Cleanser', link: '/options/Crewmates/Basic/Cleanser.html' },
            { text: 'Doctor', link: '/options/Crewmates/Basic/Doctor.html' },
            { text: 'Guess Master', link: '/options/Crewmates/Basic/GuessMaster.html' },
            { text: 'Lazy Guy', link: '/options/Crewmates/Basic/LazyGuy.html' },
            {
              text: 'Mini', link: '/options/Crewmates/Basic/Mini.html', children: [
                { text: 'Evil Mini', link: '/options/Crewmates/Basic/MiniEvil.html' },
                { text: 'Nice Mini', link: '/options/Crewmates/Basic/MiniNice.html' }
              ]
            },
            { text: 'Mole', link: '/options/Crewmates/Basic/Mole.html' },
            { text: 'Randomizer', link: '/options/Crewmates/Basic/Randomizer.html' },
            { text: 'Super Star', link: '/options/Crewmates/Basic/SuperStar.html' },
            { text: 'Task Manager', link: '/options/Crewmates/Basic/TaskManager.html' },
            { text: 'Tracefinder', link: '/options/Crewmates/Basic/Tracefinder.html' },
            { text: 'Transporter', link: '/options/Crewmates/Basic/Transporter.html' },
          ],
          '/options/Crewmates/Ghost/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates.html' },
            { text: 'Retributionist', link: '/options/Crewmates/Ghost/Retributionist.html' },
            { text: 'Warden', link: '/options/Crewmates/Ghost/Warden.html' },
                    ],
          '/options/Crewmates/Killing/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates.html' },
            { text: 'Bastion', link: '/options/Crewmates/Killing/Bastion.html' },
            { text: 'Bodyguard', link: '/options/Crewmates/Killing/Bodyguard.html' },
            { text: 'Crusader', link: '/options/Crewmates/Killing/Crusader.html' },
            { text: 'Deceiver', link: '/options/Crewmates/Killing/Deceiver.html' },
            { text: 'Jailer', link: '/options/Crewmates/Killing/Jailer.html' },
            { text: 'Judge', link: '/options/Crewmates/Killing/Judge.html' },
            { text: 'Knight', link: '/options/Crewmates/Killing/Knight.html' },
            { text: 'Nice Guesser', link: '/options/Crewmates/Killing/NiceGuesser.html' },
            { text: 'Reverie', link: '/options/Crewmates/Killing/Reverie.html' },
            { text: 'Sheriff', link: '/options/Crewmates/Killing/Sheriff.html' },
            { text: 'Veteran', link: '/options/Crewmates/Killing/Veteran.html' },
            { text: 'Vigilante', link: '/options/Crewmates/Killing/Vigilante.html' },
          ],
          '/options/Crewmates/Power/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates.html' },
            { text: 'Admirer', link: '/options/Crewmates/Power/Admirer.html' },
            { text: 'Captain', link: '/options/Crewmates/Power/Captain.html' },
            { text: 'Copycat', link: '/options/Crewmates/Power/Copycat.html' },
            { text: 'Dictator', link: '/options/Crewmates/Power/Dictator.html' },
            { text: 'Guardian', link: '/options/Crewmates/Power/Guardian.html' },
            { text: 'Lookout', link: '/options/Crewmates/Power/Lookout.html' },
            { text: 'Marshall', link: '/options/Crewmates/Power/Marshall.html' },
            { text: 'Mayor', link: '/options/Crewmates/Power/Mayor.html' },
            { text: 'Monarch', link: '/options/Crewmates/Power/Monarch.html' },
            { text: 'Overseer', link: '/options/Crewmates/Power/Overseer.html' },
            { text: 'President', link: '/options/Crewmates/Power/President.html' },
            { text: 'Swapper', link: '/options/Crewmates/Power/Swapper.html' },
            { text: 'Telecommunication', link: '/options/Crewmates/Power/Telecommunication.html' },
          ],
          '/options/Crewmates/Support/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates.html' },
            { text: 'Benefactor', link: '/options/Crewmates/Support/Benefactor.html' },
            { text: 'Chameleon', link: '/options/Crewmates/Support/Chameleon.html' },
            { text: 'Coroner', link: '/options/Crewmates/Support/Coroner.html' },
            { text: 'Deputy', link: '/options/Crewmates/Support/Deputy.html' },
            { text: 'Detective', link: '/options/Crewmates/Support/Detective.html' },
            { text: 'Enigma', link: '/options/Crewmates/Support/Enigma.html' },
            { text: 'Fortune Teller', link: '/options/Crewmates/Support/FortuneTeller.html' },
            { text: 'Grenadier', link: '/options/Crewmates/Support/Grenadier.html' },
            { text: 'Inspector', link: '/options/Crewmates/Support/Inspector.html' },
            { text: 'Investigator', link: '/options/Crewmates/Support/Investigator.html' },
            { text: 'Keeper', link: '/options/Crewmates/Support/Keeper.html' },
            { text: 'Lighter', link: '/options/Crewmates/Support/Lighter.html' },
            { text: 'Mechanic', link: '/options/Crewmates/Support/Mechanic.html' },
            { text: 'Medic', link: '/options/Crewmates/Support/Medic.html' },
            { text: 'Medium', link: '/options/Crewmates/Support/Medium.html' },
            { text: 'Merchant', link: '/options/Crewmates/Support/Merchant.html' },
            { text: 'Mortician', link: '/options/Crewmates/Support/Mortician.html' },
            { text: 'Observer', link: '/options/Crewmates/Support/Observer.html' },
            { text: 'Oracle', link: '/options/Crewmates/Support/Oracle.html' },
            { text: 'Pacifist', link: '/options/Crewmates/Support/Pacifist.html' },
            { text: 'Psychic', link: '/options/Crewmates/Support/Psychic.html' },
            { text: 'Snitch', link: '/options/Crewmates/Support/Snitch.html' },
            { text: 'Spiritualist', link: '/options/Crewmates/Support/Spiritualist.html' },
            { text: 'Spy', link: '/options/Crewmates/Support/Spy.html' },
            { text: 'Time Manager', link: '/options/Crewmates/Support/TimeManager.html' },
            { text: 'Time Master', link: '/options/Crewmates/Support/TimeMaster.html' },
            { text: 'Tracker', link: '/options/Crewmates/Support/Tracker.html' },
            { text: 'Witness', link: '/options/Crewmates/Support/Witness.html' },
          ],
          '/options/Crewmates/Vanilla/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates.html' },
            { text: 'Crewmate', link: '/options/Crewmates/Vanilla/Crewmate.html' },
            { text: 'Engineer', link: '/options/Crewmates/Vanilla/Engineer.html' },
            { text: 'Scientist', link: '/options/Crewmates/Vanilla/Scientist.html' },
          ],
          '/options/Experimental/Addon/': [
            { text: 'Back to Experimental', link: '/options/Settings/Experimental.html' },
            { text: 'YouTuber', link: '/options/Experimental/Addon/YouTuber.html' },
          ],
          '/options/Experimental/Crewmate/': [
            { text: 'Back to Experimental', link: '/options/Settings/Experimental.html' },
          ],
          '/options/Experimental/Impostor/': [
            { text: 'Back to Experimental', link: '/options/Settings/Experimental.html' },
            { text: 'Disperser', link: '/options/Experimental/Impostor/Disperser.html' },
          ],
          '/options/Experimental/Neutral/': [
            { text: 'Back to Experimental', link: '/options/Settings/Experimental.html' },
            { text: 'Doppelganger', link: '/options/Experimental/Neutral/Doppelganger.html' },
            { text: 'God', link: '/options/Experimental/Neutral/God.html' },
            { text: 'Quizmaster', link: '/options/Experimental/Neutral/Quizmaster.html' },
            { text: 'Spiritcaller', link: '/options/Experimental/Neutral/Spiritcaller.html' },
          ],
          '/options/Impostors/Concealing/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors.html' },
            { text: 'Escapist', link: '/options/Impostors/Concealing/Escapist.html' },
            { text: 'Lightning', link: '/options/Impostors/Concealing/Lightning.html' },
            { text: 'Mastermind', link: '/options/Impostors/Concealing/Mastermind.html' },
            { text: 'Miner', link: '/options/Impostors/Concealing/Miner.html' },
            { text: 'Puppeteer', link: '/options/Impostors/Concealing/Puppeteer.html' },
            { text: 'Rift Maker', link: '/options/Impostors/Concealing/RiftMaker.html' },
            { text: 'Scavenger', link: '/options/Impostors/Concealing/Scavenger.html' },
            { text: 'Shapemaster', link: '/options/Impostors/Concealing/Shapemaster.html' },
            { text: 'Soul Catcher', link: '/options/Impostors/Concealing/SoulCatcher.html' },
            { text: 'Swooper', link: '/options/Impostors/Concealing/Swooper.html' },
            { text: 'Trickster', link: '/options/Impostors/Concealing/Trickster.html' },
            { text: 'Undertaker', link: '/options/Impostors/Concealing/Undertaker.html' },
            {
              text: 'Vampire', link: '/options/Impostors/Concealing/Vampire.html', children: [
                { text: 'Vampiress', link: '/options/Impostors/Concealing/Vampiress.html' },
              ]
            },
            { text: 'Warlock', link: '/options/Impostors/Concealing/Warlock.html' },
            { text: 'Wildling', link: '/options/Impostors/Concealing/Wildling.html' },
          ],
          '/options/Impostors/Ghost/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors.html' },
            { text: 'Minion', link: '/options/Impostors/Ghost/Minion.html' },
            { text: 'Nemesis', link: '/options/Impostors/Ghost/Nemesis.html' },
          ],
          '/options/Impostors/Hindering/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors.html' },
            { text: 'Anonymous', link: '/options/Impostors/Hindering/Anonymous.html' },
            { text: 'Dazzler', link: '/options/Impostors/Hindering/Dazzler.html' },
            { text: 'Devourer', link: '/options/Impostors/Hindering/Devourer.html' },
            { text: 'Penguin', link: '/options/Impostors/Hindering/Penguin.html' },
            { text: 'Pitfall', link: '/options/Impostors/Hindering/Pitfall.html' },
            { text: 'Stealth', link: '/options/Impostors/Hindering/Stealth.html' },
            { text: 'Twister', link: '/options/Impostors/Hindering/Twister.html' },
          ],
          '/options/Impostors/Killing/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors.html' },
            {
              text: 'Arrogance', link: '/options/Impostors/Killing/Arrogance.html', children: [
                { text: 'Bard', link: '/options/Impostors/Killing/Bard.html' },
              ]
            },
            { text: 'Berserker', link: '/options/Impostors/Killing/Berserker.html' },
            {
              text: 'Bomber', link: '/options/Impostors/Killing/Bomber.html', children: [
                { text: 'Nuker', link: '/options/Impostors/Killing/Nuker.html' },
              ]
            },
            { text: 'Bounty Hunter', link: '/options/Impostors/Killing/BountyHunter.html' },
            { text: 'Butcher', link: '/options/Impostors/Killing/Butcher.html' },
            { text: 'Chronomancer', link: '/options/Impostors/Killing/Chronomancer.html' },
            { text: 'Councillor', link: '/options/Impostors/Killing/Councillor.html' },
            { text: 'Cursed Wolf', link: '/options/Impostors/Killing/CursedWolf.html' },
            { text: 'Deathpact', link: '/options/Impostors/Killing/Deathpact.html' },
            { text: 'Evil Guesser', link: '/options/Impostors/Killing/EvilGuesser.html' },
            { text: 'Evil Tracker', link: '/options/Impostors/Killing/EvilTracker.html' },
            { text: 'Greedy', link: '/options/Impostors/Killing/Greedy.html' },
            { text: 'Hangman', link: '/options/Impostors/Killing/Hangman.html' },
            { text: 'Inhibitor', link: '/options/Impostors/Killing/Inhibitor.html' },
            { text: 'Instigator', link: '/options/Impostors/Killing/Instigator.html' },
            { text: 'Killing Machine', link: '/options/Impostors/Killing/KillingMachine.html' },
            { text: 'Ludopath', link: '/options/Impostors/Killing/Ludopath.html' },
            { text: 'Lurker', link: '/options/Impostors/Killing/Lurker.html' },
            { text: 'Mercenary', link: '/options/Impostors/Killing/Mercenary.html' },
            { text: 'Ninja', link: '/options/Impostors/Killing/Ninja.html' },
            { text: 'Quick Shooter', link: '/options/Impostors/Killing/QuickShooter.html' },
            { text: 'Saboteur', link: '/options/Impostors/Killing/Saboteur.html' },
            { text: 'Sniper', link: '/options/Impostors/Killing/Sniper.html' },
            { text: 'Spellcaster', link: '/options/Impostors/Killing/Spellcaster.html' },
            { text: 'Trapster', link: '/options/Impostors/Killing/Trapster.html' },
            { text: 'Underdog', link: '/options/Impostors/Killing/Underdog.html' },
            { text: 'Zombie', link: '/options/Impostors/Killing/Zombie.html' }
          ],
          '/options/Impostors/Madmate/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors.html' },
            { text: 'Convict', link: '/options/Impostors/Madmate/Convict.html' },
            { text: 'Crewposter', link: '/options/Impostors/Madmate/Crewposter.html' },
            { text: 'Parasite', link: '/options/Impostors/Madmate/Parasite.html' },
            { text: 'Refugee', link: '/options/Impostors/Madmate/Refugee.html' },
          ],
          '/options/Impostors/Support/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors.html' },
            { text: 'Anti Adminer', link: '/options/Impostors/Support/AntiAdminer.html' },
            { text: 'Blackmailer', link: '/options/Impostors/Support/Blackmailer.html' },
            { text: 'Camouflager', link: '/options/Impostors/Support/Camouflager.html' },
            { text: 'Cleaner', link: '/options/Impostors/Support/Cleaner.html' },
            { text: 'Consigliere', link: '/options/Impostors/Support/Consigliere.html' },
            { text: 'Fireworker', link: '/options/Impostors/Support/Fireworker.html' },
            { text: 'Gangster', link: '/options/Impostors/Support/Gangster.html' },
            { text: 'Godfather', link: '/options/Impostors/Support/Godfather.html' },
            { text: 'Kamikaze', link: '/options/Impostors/Support/Kamikaze.html' },
            { text: 'Morphling', link: '/options/Impostors/Support/Morphling.html' },
            { text: 'Nemesis', link: '/options/Impostors/Support/Nemesis.html' },
            { text: 'Time Thief', link: '/options/Impostors/Support/TimeThief.html' },
            { text: 'Vindicator', link: '/options/Impostors/Support/Vindicator.html' },
            { text: 'Visionary', link: '/options/Impostors/Support/Visionary.html' },
          ],
          '/options/Impostors/Vanilla/': [
            { text: 'Back to Impostors', link: '/options/Settings/Crewmates.html' },
            { text: 'Impostor', link: '/options/Impostors/Vanilla/Impostor.html' },
            { text: 'Shapeshifter', link: '/options/Impostors/Vanilla/Shapeshifter.html' },
          ],
          '/options/Neutrals/Benign': [
            { text: 'Back to Neutrals', link: '/options/Settings/Neutrals.html' },
            { text: 'Amnesiac', link: '/options/Neutrals/Benign/Amnesiac.html' },
            { text: 'Follower', link: '/options/Neutrals/Benign/Follower.html' },
            { text: 'Hater', link: '/options/Neutrals/Benign/Hater.html' },
            { text: 'Imitator', link: '/options/Neutrals/Benign/Imitator.html' },
            { text: 'Lawyer', link: '/options/Neutrals/Benign/Lawyer.html' },
            { text: 'Maverick', link: '/options/Neutrals/Benign/Maverick.html' },
            { text: 'Opportunist', link: '/options/Neutrals/Benign/Opportunist.html' },
            { text: 'Pixie', link: '/options/Neutrals/Benign/Pixie.html' },
            { text: 'Pursuer', link: '/options/Neutrals/Benign/Pursuer.html' },
            {
              text: 'Romantic', link: '/options/Neutrals/Benign/Romantic.html', children: [
                { text: 'Vengeful Romantic', link: '/options/Neutrals/Benign/RomanticVengeful.html' },
                { text: 'Ruthless Romantic', link: '/options/Neutrals/Benign/RomanticRuthless.html' },
              ]
            },
            { text: 'Shaman', link: '/options/Neutrals/Benign/Shaman.html' },
            { text: 'Schrodingers Cat', link: '/options/Neutrals/Benign/SchrodingersCat.html' },
            { text: 'Taskinator', link: '/options/Neutrals/Benign/Taskinator.html' },
          ],
          '/options/Neutrals/Chaos': [
            { text: 'Back to Neutrals', link: '/options/Settings/Neutrals.html' },
            { text: 'Collector', link: '/options/Neutrals/Chaos/Collector.html' },
            { text: 'Cultist', link: '/options/Neutrals/Chaos/Cultist.html' },
            { text: 'Phantom', link: '/options/Neutrals/Chaos/Phantom.html' },
            { text: 'Pirate', link: '/options/Neutrals/Chaos/Pirate.html' },
            { text: 'Provocateur', link: '/options/Neutrals/Chaos/Provocateur.html' },
            { text: 'Revolutionist', link: '/options/Neutrals/Chaos/Revolutionist.html' },
            { text: 'Solsticer', link: '/options/Neutrals/Chaos/Solsticer.html' },
            { text: 'Soul Collector', link: '/options/Neutrals/Chaos/SoulCollector.html' },
            { text: 'Terrorist', link: '/options/Neutrals/Chaos/Terrorist.html' },
            { text: 'Vector', link: '/options/Neutrals/Chaos/Vector.html' },
            { text: 'Vulture', link: '/options/Neutrals/Chaos/Vulture.html' },
            { text: 'Workaholic', link: '/options/Neutrals/Chaos/Workaholic.html' },
          ],
          '/options/Neutrals/Evil/': [
            { text: 'Back to Neutrals', link: '/options/Settings/Neutrals.html' },
            { text: 'Cursed Soul', link: '/options/Neutrals/Evil/CursedSoul.html' },
            { text: 'Doomsayer', link: '/options/Neutrals/Evil/Doomsayer.html' },
            { text: 'Executioner', link: '/options/Neutrals/Evil/Executioner.html' },
            { text: 'Innocent', link: '/options/Neutrals/Evil/Innocent.html' },
            {
              text: 'Jester', link: '/options/Neutrals/Evil/Jester.html', children: [
                { text: 'Sunnyboy', link: '/options/Neutrals/Evil/Sunnyboy.html' },
              ]
            },
            { text: 'Masochist', link: '/options/Neutrals/Evil/Masochist.html' },
            { text: 'Seeker', link: '/options/Neutrals/Evil/Seeker.html' },
          ],
          '/options/Neutrals/Killing/': [
            { text: 'Back to Neutrals', link: '/options/Settings/Neutrals.html' },
            { text: 'Agitator', link: '/options/Neutrals/Killing/Agitator.html' },
            { text: 'Arsonist', link: '/options/Neutrals/Killing/Arsonist.html' },
            { text: 'Bandit', link: '/options/Neutrals/Killing/Bandit.html' },
            { text: 'Blood Knight', link: '/options/Neutrals/Killing/BloodKnight.html' },
            { text: 'Demon', link: '/options/Neutrals/Killing/Demon.html' },
            { text: 'Glitch', link: '/options/Neutrals/Killing/Glitch.html' },
            { text: 'Hex Master', link: '/options/Neutrals/Killing/HexMaster.html' },
            { text: 'Huntsman', link: '/options/Neutrals/Killing/Huntsman.html' },
            { text: 'Infectious', link: '/options/Neutrals/Killing/Infectious.html' },
            { text: 'Jackal', link: '/options/Neutrals/Killing/Jackal.html' },
            { text: 'Jinx', link: '/options/Neutrals/Killing/Jinx.html' },
            { text: 'Juggernaut', link: '/options/Neutrals/Killing/Juggernaut.html' },
            { text: 'Medusa', link: '/options/Neutrals/Killing/Medusa.html' },
            { text: 'Necromancer', link: '/options/Neutrals/Killing/Necromancer.html' },
            { text: 'Pelican', link: '/options/Neutrals/Killing/Pelican.html' },
            { text: 'Pickpocket', link: '/options/Neutrals/Killing/Pickpocket.html' },
            { text: 'Plaguebearer', link: '/options/Neutrals/Killing/Plaguebearer.html' },
            { text: 'Plague Scientist', link: '/options/Neutrals/Killing/PlagueScientist.html' },
            { text: 'Poisoner', link: '/options/Neutrals/Killing/Poisoner.html' },
            { text: 'Potion Master', link: '/options/Neutrals/Killing/PotionMaster.html' },
            { text: 'Pyromaniac', link: '/options/Neutrals/Killing/Pyromaniac.html' },
            { text: 'Serial Killer', link: '/options/Neutrals/Killing/SerialKiller.html' },
            { text: 'Shroud', link: '/options/Neutrals/Killing/Shroud.html' },
            { text: 'Stalker', link: '/options/Neutrals/Killing/Stalker.html' },
            { text: 'Traitor', link: '/options/Neutrals/Killing/Traitor.html' },
            { text: 'Virus', link: '/options/Neutrals/Killing/Virus.html' },
            { text: 'Werewolf', link: '/options/Neutrals/Killing/Werewolf.html' },
            { text: 'Wraith', link: '/options/Neutrals/Killing/Wraith.html' },
          ],
          '/options/Settings/': [
            { text: 'Custom Settings', link: '/options/Settings/Custom.html' },
            { text: 'System Settings', link: '/options/Settings/System.html' },
            { text: 'Game Settings', link: '/options/Settings/Game.html' },
            { text: 'Game Modifiers', link: '/options/Settings/Modifiers.html' },
            { text: 'Impostors', link: '/options/Settings/Impostors.html' },
            { text: 'Crewmates', link: '/options/Settings/Crewmates.html' },
            { text: 'Neutrals', link: '/options/Settings/Neutrals.html' },
            { text: 'Add-ons', link: '/options/Settings/Addons.html' },
            { text: 'Experimental', link: '/options/Settings/Experimental.html' },
          ],
        },
        repo: '0xDrMoe/TOHRE-Code',
        repoLabel: 'Contribute!',
        docsRepo: '0xDrMoe/TOHRE-Code',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Contribute to this page on GitHub!',
        notFound: [
          'Where are you going?',
          'Huh? How did you end up here?',
          'Honestly, how did you get here?',
          'This is not the page you are looking for.',
          'Nothing to see here.',
          'Nope. Not here.',
          'Whatever you\'re looking for, it\'s not here.'
        ],
        backToHome: 'Take me back to my safe space please.',
        toggleColorMode: 'Toggle Color Scheme',
        selectLanguageName: 'English',
      },
      '/fr-FR/': {
        base: '/fr-FR/',
        navbar: [
          {
            text: 'Les Rôles',
            children: [
              {
                text: 'Tous les Rôles',
                link: 'Roles.html',
              },
              {
                text: 'Rôles d\'Imposteur',
                link: 'options/Settings/Impostors.html',
              },
              {
                text: 'Rôles d\'Équipier',
                link: 'options/Settings/Crewmates.html',
              },
              {
                text: 'Rôles Neutres',
                link: 'options/Settings/Neutrals.html',
              },
              {
                text: 'Rôles Add-on',
                link: 'options/Settings/Addons.html',
              },
              {
                text: 'Rôles Expérimentaux',
                link: 'options/Settings/Experimental.html',
              },
              {
                text: 'Paramètres Personnalisés',
                link: 'options/Settings/Custom.html',
              },
              {
                text: 'Paramètres de Jeu',
                link: 'options/Settings/Game.html',
              },
              {
                text: 'Modificateurs de Jeu',
                link: 'options/Settings/Modifiers.html',
              },
            ]
          },
          {
            text: 'À Propos',
            link: 'AboutUs.html',
          },
          {
            text: 'Avancé',
            link: 'Advanced.html',
          },
          {
            text: 'Installer',
            link: 'GetStarted.html',
          },
          {
            text: 'FAQ',
            link: 'FAQ.html',
          },
        ],
        repo: '0xDrMoe/TOHRE-Code',
        repoLabel: 'Contribuer!',
        docsRepo: '0xDrMoe/TOHRE-Code',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Aidez-nous à améliorer cette page!',
        notFound: [
          'Où allez-vous?',
          'Huh? Comment êtes-vous arrivé ici?',
          'Honnêtement, comment êtes-vous arrivé ici?',
          'Ce n\'est pas la page que vous recherchez.',
          'Rien à voir ici.',
          'Non. Pas ici.',
          'Quoi que vous cherchiez, ce n\'est pas ici.'
        ],
        backToHome: 'Ramenez-moi dans mon espace sécurisé s\'il vous plaît.',
        toggleColorMode: 'Basculer le mode couleur',
        selectLanguageName: 'French',
      },
      'zh-CN': {
        base: '/zh-CN/',
        navbar: [
          {
            text: '角色',
            children: [
              {
                text: '所有角色',
                link: 'Roles.html',
              },
              {
                text: '冒牌者角色',
                link: 'options/Settings/Impostors.html',
              },
              {
                text: '船员角色',
                link: 'options/Settings/Crewmates.html',
              },
              {
                text: '中立角色',
                link: 'options/Settings/Neutrals.html',
              },
              {
                text: '附加角色',
                link: 'options/Settings/Addons.html',
              },
              {
                text: '实验性角色',
                link: 'options/Settings/Experimental.html',
              },
              {
                text: '自定义设置',
                link: 'options/Settings/Custom.html',
              },
              {
                text: '游戏设置',
                link: 'options/Settings/Game.html',
              },
              {
                text: '游戏修改器',
                link: 'options/Settings/Modifiers.html',
              },
            ]
          },
          {
            text: '关于',
            link: 'AboutUs.html',
          },
          {
            text: '高级',
            link: 'Advanced.html',
          },
          {
            text: '安装',
            link: 'GetStarted.html',
          },
          {
            text: '常问问题',
            link: 'FAQ.html',
          },
        ],
        repo: '0xDrMoe/TOHRE-Code',
        repoLabel: '贡献!',
        docsRepo: '0xDrMoe/TOHRE-Code',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '帮助我们改进这个页面!',
        notFound: [
          '你要去哪里?',
          '嗯? 你怎么到这儿来了?',
          '老实说, 你是怎么到这儿来的?',
          '这不是你要找的页面.',
          '这里什么也没有.',
          '不, 这里没有.',
          '无论你在找什么, 这里都没有'
        ],
        backToHome: '请把我带回我的安全空间.',
        toggleColorMode: '切换颜色模式',
        selectLanguageName: 'Chinese',
      },
    }
  })
})