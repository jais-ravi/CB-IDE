'use client';

// Note: This file must be saved as TargetAudiences.tsx to support JSX syntax

import React, { useState, useEffect } from 'react';

interface Feature {
  title: string;
  description: string;
}

interface TabContent {
  id: string;
  title: string;
  description: string;
  features: Feature[];
  link: { text: string; href: string };
  visual: React.ReactNode;
}

const tabs: TabContent[] = [
  {
    id: 'developers',
    title: 'Build solo, prototype fast',
    description: 'Get from idea to implementation in record time with our optimized solo development experience.',
    features: [
      { title: 'Pre-configured environments', description: 'Start coding instantly with environments tailored for your language of choice.' },
      { title: 'Rapid prototyping', description: 'Iterate quickly with hot reloading and instant preview capabilities.' },
      { title: 'Personal workspace', description: 'Customizable IDE with your preferred settings, themes, and extensions.' },
    ],
    link: { text: 'Learn more about developer features', href: '#features' },
    visual: (
      <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700" id="el-ug8if7ir">
        <div className="p-4 bg-gray-900 border-b border-gray-700 flex items-center" id="el-8m0s8tys">
          <div className="flex space-x-2" id="el-00e4jwoi">
            <div className="h-3 w-3 rounded-full bg-red-500" id="el-fjquntsj"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500" id="el-27n2hlzm"></div>
            <div className="h-3 w-3 rounded-full bg-green-500" id="el-scsb8si1"></div>
          </div>
          <div className="ml-4 text-gray-400 text-sm" id="el-xenedqo3">~/projects/my-app</div>
        </div>
        <div className="p-6 bg-gray-800" id="el-pl74usqe">
          <pre className="text-sm font-mono text-gray-100 overflow-x-auto" id="el-ugf361an">
            <span className="text-blue-400" id="el-3sbnk7wy">import</span>{' '}
            <span className="text-green-400" id="el-yw1atus0">React</span>{' '}
            <span className="text-blue-400" id="el-f2a1de9q">from</span>{' '}
            <span className="text-yellow-400" id="el-h7f0793r">'react'</span>;
            <br />
            <br />
            <span className="text-blue-400" id="el-x06tt2ei">function</span>{' '}
            <span className="text-green-400" id="el-zw8a6cxp">App</span>() {'{'}
            <br />
            {'  '}
            <span className="text-blue-400" id="el-1rtvbks0">return</span> (
            <br />
            {'    '}
            <span className="text-yellow-400" id="el-gxxf23wz">&lt;div className="app"&gt;</span>
            <br />
            {'      '}
            <span className="text-yellow-400" id="el-vpaikqex">&lt;h1&gt;</span>Hello, Developer!
            <span className="text-yellow-400" id="el-7gus4l77">&lt;/h1&gt;</span>
            <br />
            {'      '}
            <span className="text-yellow-400" id="el-o6gromth">&lt;p&gt;</span>Build your next great idea
            <span className="text-yellow-400" id="el-b2vv0vd5">&lt;/p&gt;</span>
            <br />
            {'      '}
            <span className="text-yellow-400" id="el-nna1lk8f">&lt;button&gt;</span>Get Started
            <span className="text-yellow-400" id="el-9zdug49d">&lt;/button&gt;</span>
            <br />
            {'    '}
            <span className="text-yellow-400" id="el-fp4i5s4v">&lt;/div&gt;</span>
            <br />
            {'  '});
            <br />
            {'}'}
            <br />
            <br />
            <span className="text-blue-400" id="el-vxhp036f">export</span>{' '}
            <span className="text-blue-400" id="el-coj6alf3">default</span>{' '}
            <span className="text-green-400" id="el-f90ka0tl">App</span>;
          </pre>
        </div>
        <div className="p-3 bg-gray-900 border-t border-gray-700" id="el-yf6chomi">
          <div className="flex items-center text-sm text-gray-400" id="el-rp39cija">
            <span id="el-9yo5klvu">Terminal: npm start</span>
            <span className="ml-auto" id="el-5dzu3hwv">Ready on http://localhost:3000</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'teams',
    title: 'Pair programming, shared workspaces',
    description: 'Collaborate in real-time with your team, no matter where they are located.',
    features: [
      { title: 'Real-time collaboration', description: 'See changes as they happen with multi-cursor support and live editing.' },
      { title: 'Team management', description: 'Manage roles, permissions and access controls for your team members.' },
      { title: 'Team-wide environments', description: 'Ensure consistent development environments across your entire team.' },
    ],
    link: { text: 'Learn more about team features', href: '#features' },
    visual: (
      <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-md" id="el-wl9nm0ip">
        <div className="p-4 bg-gray-900 border-b border-gray-700 flex items-center" id="el-l8wqsqow">
          <div className="text-gray-200 font-medium" id="el-k4m3sedq">Team Workspace</div>
          <div className="ml-auto flex items-center" id="el-7cks6and">
            <div className="flex -space-x-2" id="el-4as0kn34">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm" id="el-ionrkyv1">JD</div>
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm" id="el-4bcve77j">AK</div>
              <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-white text-sm" id="el-pznwppb0">MR</div>
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm" id="el-aq7bwogh">+2</div>
            </div>
            <button className="ml-3 text-gray-400 hover:text-gray-200" id="el-obaw4gdh">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" id="el-gh1ll4dy">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" id="el-4g8g6aar"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="p-6" id="el-fuvwi1eh">
          <div className="flex flex-col gap-4" id="el-3clekjrf">
            <div className="flex items-start gap-3" id="el-d9ibu02u">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm flex-shrink-0" id="el-6kwus6ap">JD</div>
              <div className="bg-gray-700 rounded-lg p-3 max-w-md" id="el-21zl8zmn">
                <div className="font-medium text-blue-300" id="el-hy6i0k0i">John Doe</div>
                <div className="text-gray-300" id="el-r0q0ztqy">I've updated the API integration. Can someone review my code?</div>
                <div className="text-xs text-gray-500 mt-1" id="el-2xuinkb8">10:45 AM</div>
              </div>
            </div>
            <div className="flex items-start gap-3" id="el-kz4qg5gz">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm flex-shrink-0" id="el-eta3ajc1">AK</div>
              <div className="bg-gray-700 rounded-lg p-3 max-w-md" id="el-h9dx04ru">
                <div className="font-medium text-green-300" id="el-f5t9q2s5">Alice Kim</div>
                <div className="text-gray-300" id="el-ief9lkxg">I'll take a look. Have you added tests for the new endpoints?</div>
                <div className="text-xs text-gray-500 mt-1" id="el-pt41zfj1">10:48 AM</div>
              </div>
            </div>
            <div className="flex items-start gap-3" id="el-4fkia45o">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm flex-shrink-0" id="el-y1a03di8">JD</div>
              <div className="bg-gray-700 rounded-lg p-3 max-w-md" id="el-ad1ceo6r">
                <div className="font-medium text-blue-300" id="el-39wrvyx4">John Doe</div>
                <div className="text-gray-300" id="el-kvqp77qn">
                  Yes, run the test suite with <code className="bg-gray-800 px-1 py-0.5 rounded text-xs" id="el-ah0ig6sk">npm test</code>
                </div>
                <div className="text-xs text-gray-500 mt-1" id="el-psw39p2y">10:50 AM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-900 border-t border-gray-700 flex items-center" id="el-18gkkwwu">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-gray-800 text-gray-200"
            id="el-s1w63af5"
          />
          <button className="ml-2 bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition-colors" id="el-nqukcdfh">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" id="el-jjvz9ss8">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" id="el-shx2zwhy"></path>
            </svg>
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 'educators',
    title: 'Live sessions, classroom tools',
    description: 'Create engaging learning experiences with interactive coding environments for students.',
    features: [
      { title: 'Interactive classrooms', description: 'Create virtual classrooms where students can follow along with live coding.' },
      { title: 'Assignment management', description: 'Create, distribute, and grade coding assignments all in one place.' },
      { title: 'Progress tracking', description: 'Monitor student progress and provide targeted feedback on their code.' },
    ],
    link: { text: 'Learn more about education features', href: '#features' },
    visual: (
      <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-md" id="el-t4iupg13">
        <div className="p-4 bg-green-800 text-white flex items-center" id="el-zvcdteks">
          <div className="font-medium" id="el-md5n220d">Programming 101 - Classroom</div>
          <div className="ml-auto text-sm bg-gray-900 text-green-400 px-2 py-1 rounded" id="el-51jsfgdy">Live Session</div>
        </div>
        <div className="grid grid-cols-12 h-64" id="el-6m8lct37">
          <div className="col-span-3 bg-gray-900 border-r border-gray-700 p-3" id="el-owu4hacf">
            <div className="mb-4" id="el-t3ky55qj">
              <div className="text-sm font-medium text-gray-200 mb-2" id="el-5iqe5vbj">Students (24)</div>
              <div className="space-y-1 max-h-32 overflow-y-auto" id="el-oqm9wbap">
                <div className="flex items-center" id="el-9pz7xmal">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" id="el-myf4gjiy"></div>
                  <div className="text-sm text-gray-400" id="el-tk7yfxwv">Emily J.</div>
                </div>
                <div className="flex items-center" id="el-qv3xetoq">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" id="el-brhzouxc"></div>
                  <div className="text-sm text-gray-400" id="el-x7eorfve">Michael T.</div>
                </div>
                <div className="flex items-center" id="el-tkryi01d">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" id="el-27my1p2e"></div>
                  <div className="text-sm text-gray-400" id="el-zh234z4b">Sarah K.</div>
                </div>
                <div className="flex items-center" id="el-yfz9iogu">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" id="el-kocj5mnp"></div>
                  <div className="text-sm text-gray-400" id="el-cj2y7i83">David L.</div>
                </div>
                <div className="flex items-center" id="el-utpqijnq">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-2" id="el-qmlx9x5d"></div>
                  <div className="text-sm text-gray-500" id="el-3cb2y28l">+ 20 more</div>
                </div>
              </div>
            </div>
            <div id="el-wflirqhn">
              <div className="text-sm font-medium text-gray-200 mb-2" id="el-7t7y8272">Resources</div>
              <div className="space-y-1" id="el-427rhkx5">
                <div className="flex items-center text-sm text-blue-400" id="el-o9tyt86y">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor" id="el-29x62lce">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" id="el-ax7syq07"></path>
                  </svg>
                  Lesson PDF
                </div>
                <div className="flex items-center text-sm text-blue-400" id="el-s8q3f4ds">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor" id="el-ghe4s7yr">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" id="el-nhsk52y4"></path>
                  </svg>
                  Assignment
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-9 p-3 bg-gray-800" id="el-nv8svmqz">
            <div className="text-sm font-medium text-gray-200 mb-2" id="el-v7pmxdgx">Instructor Demo</div>
            <div className="bg-gray-900 rounded text-white font-mono text-sm p-3 h-32 overflow-y-auto" id="el-3piw9h46">
              <pre id="el-iuknji3b">
                <span className="text-blue-400" id="el-v0vetcbo">function</span>{' '}
                <span className="text-green-400" id="el-6uwwlr7w">calculateArea</span>(length, width) {'{'}
                <br />
                {'  '}
                <span className="text-purple-400" id="el-0hjtuaf3">return</span> length * width;
                <br />
                {'}'}
                <br />
                <br />
                <span className="text-green-400" id="el-54zpfc20">let</span> roomLength ={' '}
                <span className="text-yellow-400" id="el-4dzcdck4">10</span>;
                <br />
                <span className="text-green-400" id="el-pweo89ck">let</span> roomWidth ={' '}
                <span className="text-yellow-400" id="el-eckimvyo">8</span>;
                <br />
                <span className="text-green-400" id="el-mgsk35ic">let</span> area ={' '}
                <span className="text-purple-400" id="el-x5mekd9b">calculateArea</span>(roomLength, roomWidth);
                <br />
                <br />
                <span className="text-purple-400" id="el-1o5btion">console</span>.log(
                <span className="text-yellow-400" id="el-zhs7e78o">`The area is ${10 * 8} square meters`</span>);
              </pre>
            </div>
            <div className="mt-3" id="el-3hak4qnt">
              <div className="text-sm font-medium text-gray-200 mb-2" id="el-pvt94nsd">Your Work</div>
              <div className="border border-gray-700 rounded bg-gray-900 p-3 h-20" id="el-2y4h2d5t">
                <div className="text-sm text-gray-500 italic" id="el-gl3qrucz">Type your solution here...</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 bg-gray-900 border-t border-gray-700 flex items-center justify-between" id="el-gkr9ihgl">
          <div className="text-sm text-gray-400" id="el-9b3moes6">Assignment due: Friday, 5:00 PM</div>
          <button className="bg-green-700 text-white px-4 py-2 rounded text-sm hover:bg-green-600 transition-colors" id="el-4alv0xw6">Submit Work</button>
        </div>
      </div>
    ),
  },
];

const CheckIcon: React.FC<{ className?: string; id?: string }> = ({ className, id }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor" id={id}>
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ArrowRightIcon: React.FC<{ className?: string; id?: string }> = ({ className, id }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor" id={id}>
    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const TargetAudiences: React.FC = () => {
  const [activeTab, setActiveTab] = useState('developers');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  if (!mounted) {
    return <div className="py-20 bg-gray-900" />;
  }

  return (
    <section id="target-audiences" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4" id="el-8y916chv">
        <div className="text-center mb-16" id="el-lxyl6ipq">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" id="el-yu63x5s9">For Teams</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" id="el-3pupy26v">
            Tailored solutions for different user needs, whether you're coding solo or collaborating with a team.
          </p>
        </div>

        <div className="flex justify-center mb-10" id="el-wdypbxxt">
          <div className="inline-flex bg-gray-800 rounded-lg p-1" id="el-ai9v9yle">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id ? 'bg-gray-700 shadow-sm text-white' : 'text-gray-400'
                }`}
                onClick={() => handleTabChange(tab.id)}
                data-tab={tab.id}
                id={`el-${tab.id === 'developers' ? 'ayz6br6u' : tab.id === 'teams' ? '892sjtqu' : 'u9wh4bdi'}`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`${tab.id}-content`}
              >
                {tab.id === 'developers' ? 'For Developers' : tab.id === 'teams' ? 'For Teams' : 'For Education'}
              </button>
            ))}
          </div>
        </div>

        <div className="tab-content-container" id="el-2z5n886i">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-content ${activeTab === tab.id ? 'active' : 'hidden'}`}
              id={`${tab.id}-content`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
            >
              <div
                className="flex flex-col lg:flex-row items-center gap-10"
                id={`el-${tab.id === 'developers' ? 'gmlixfcp' : tab.id === 'teams' ? '7etaow78' : 'pzdpo1c1'}`}
              >
                <div className="lg:w-1/2" id={`el-${tab.id === 'developers' ? 'q78oj5mo' : tab.id === 'teams' ? 'a7peq3ff' : 'h8rhztsu'}`}>
                  <h3
                    className="text-2xl font-bold mb-4 text-white"
                    id={`el-${tab.id === 'developers' ? '241s46rx' : tab.id === 'teams' ? 'beq77hao' : '0qk3z6jr'}`}
                  >
                    {tab.title}
                  </h3>
                  <p
                    className="text-gray-400 mb-6"
                    id={`el-${tab.id === 'developers' ? '5o24lnu6' : tab.id === 'teams' ? '63lfff57' : 'k7m5ypi4'}`}
                  >
                    {tab.description}
                  </p>
                  <ul
                    className="space-y-4 mb-8"
                    id={`el-${tab.id === 'developers' ? 'rom0r4ff' : tab.id === 'teams' ? 'zcj0si3u' : '9e16gv8q'}`}
                  >
                    {tab.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                        id={`el-${tab.id === 'developers' ? ['at6dsolw', '68eposfn', '3r0rhh6e'][index] : tab.id === 'teams' ? ['q516m7w0', 'zmbfbta0', 'x6n6kqeo'][index] : ['9hqhmx4s', '6fi9rx0e', '9z6fsb8t'][index]}`}
                      >
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                            tab.id === 'developers' ? 'bg-blue-900 text-blue-400' : tab.id === 'teams' ? 'bg-purple-900 text-purple-400' : 'bg-green-900 text-green-400'
                          }`}
                          id={`el-${tab.id === 'developers' ? ['zjfi2kbx', 'b5y274ns', 'i600y3ar'][index] : tab.id === 'teams' ? ['7192vgqf', 'tm2nqeh0', 'cr8l3mg5'][index] : ['iui9arcj', 'njgql44k', 'aw4vltma'][index]}`}
                        >
                          <CheckIcon
                            className="h-4 w-4"
                            id={`el-${tab.id === 'developers' ? ['tlxx717o', 'gcdb1ysl', 'd0frhft4'][index] : tab.id === 'teams' ? ['vveovq1y', 'mn2pxi6m', '7ctzm8vr'][index] : ['1fwa7ytn', 'lcf9nehi', 'wk7z95a6'][index]}`}
                          />
                        </div>
                        <div
                          className="ml-3"
                          id={`el-${tab.id === 'developers' ? ['4vb5unmt', 'cyfxbsjp', '5a11u38q'][index] : tab.id === 'teams' ? ['tcseskee', 'b1a3hhei', '993npgm2'][index] : ['5fag3rzn', '1e1wp2w7', 'e8m4mgf4'][index]}`}
                        >
                          <h4
                            className="text-lg font-medium text-white"
                            id={`el-${tab.id === 'developers' ? ['bien8u42', 'z8dt971b', '6hd0c3uy'][index] : tab.id === 'teams' ? ['f4me91u9', 'x0p19j8y', 'lx70x8dh'][index] : ['e7os0o55', 'kl1jc5t3', '4g2iusxh'][index]}`}
                          >
                            {feature.title}
                          </h4>
                          <p
                            className="text-gray-400"
                            id={`el-${tab.id === 'developers' ? ['696un348', 'hbn2rlx8', 'fy0ud1o0'][index] : tab.id === 'teams' ? ['73tamyl6', 'nfkl2ok5', 'h5jalisi'][index] : ['lb77ejh4', '0ujbk517', 'j94yro59'][index]}`}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={tab.link.href}
                    className={`inline-flex items-center font-medium transition-colors ${
                      tab.id === 'developers' ? 'text-blue-400 hover:text-blue-300' : tab.id === 'teams' ? 'text-purple-400 hover:text-purple-300' : 'text-green-400 hover:text-green-300'
                    }`}
                    id={`el-${tab.id === 'developers' ? '8dvmqrg5' : tab.id === 'teams' ? 'ypxh9vua' : '5yihwppl'}`}
                    target="_self"
                  >
                    {tab.link.text}
                    <ArrowRightIcon
                      className="h-5 w-5 ml-1"
                      id={`el-${tab.id === 'developers' ? 'ha2axccm' : tab.id === 'teams' ? '5rtxitl5' : 'xd29hmum'}`}
                    />
                  </a>
                </div>
                <div
                  className="lg:w-1/2"
                  id={`el-${tab.id === 'developers' ? 'iynv7t0k' : tab.id === 'teams' ? 'z81qhrez' : '6bpgvb7a'}`}
                >
                  {tab.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudiences;