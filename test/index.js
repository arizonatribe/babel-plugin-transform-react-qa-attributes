require('@babel/register')

import path from 'path'
import runFixtures from '@babel/helper-transform-fixture-test-runner'

runFixtures(path.join(__dirname, 'fixtures'))
